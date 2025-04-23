import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const SignUP = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name,phone,email, password };
        console.log(user);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

            fetch('http://localhost:5000/jobuser',{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
    }
    return (

        <div>
            <div className="hero bg-base-200 min-h-[650px]">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left mb-6">
                        <h1 className="text-4xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Name" />

                                    <label className="fieldset-label">Phone</label>
                                    <input type="text" name='phone' className="input" placeholder="Phone" />

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUP;