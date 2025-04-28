import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import signUpLottie from '../assets/signUpLottie.json'
import Lottie from 'lottie-react';

const SignUP = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, phone, email, password };
        console.log(user);
        // createUser(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //     })

        //     fetch('http://localhost:5000/jobuser',{
        //         method:'POST',
        //         headers:{
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data);
        //         if(data.insertedId){
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'User has been created successfully in both Firebase and MongoDB.',
        //                 icon: 'success',
        //                 confirmButtonText: 'Awesome!',
        //               });
        //         }
        //     })

        try {
            const firebaseResult = await createUser(email, password);
            console.log(firebaseResult.user);
            const mongoDbRespons = await fetch('http://localhost:5000/jobuser', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await mongoDbRespons.json();
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User has been created successfully in both Firebase and MongoDB.',
                    icon: 'success',
                    confirmButtonText: 'Awesome!',
                });
                form.reset();
            } else {
                throw new Error('MongoDB insertion failed');
            }
        }

        catch (error) {
            console.log(error.message);
            // Handle Firebase and MongoDB errors
            Swal.fire({
                title: 'Error!',
                text: `There was an error: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again',
            });
        }

    }
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="w-full max-w-md">
                    <Lottie animationData={signUpLottie} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center mb-4">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input input-bordered w-full" placeholder="Name" />

                                <label className="label mt-4">Phone</label>
                                <input type="text" name="phone" className="input input-bordered w-full" placeholder="Phone" />

                                <label className="label mt-4">Email</label>
                                <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" />

                                <label className="label mt-4">Password</label>
                                <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" />

                                <button className="btn btn-neutral w-full mt-6">Sign Up/Register</button>

                                <p className="mt-4 text-center">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="text-purple-500 font-bold">Sign In</Link>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignUP;