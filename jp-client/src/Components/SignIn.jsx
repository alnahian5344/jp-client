import React, { useContext } from 'react';

import loginLottie from '../assets/loginLottie.json'
import Lottie from 'lottie-react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const handleSignIn = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, phone, email, password };
        // console.log(user);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result?.user) {
                    // console.log('object');
                    navigate('/users')
                }
            })
            .catch(error => { error.message })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="w-full max-w-md">
                    <Lottie animationData={loginLottie} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center mb-4">Log In Now</h1>
                        <form onSubmit={handleSignIn} >
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />

                                <label className="fieldset-label">Phone</label>
                                <input type="text" name='phone' className="input" placeholder="Phone" />

                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="fieldset-label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Sign In</button>
                                <p>Don't have an account? <a href="/signup" className="text-purple-500 font-bold">Sign Up</a></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;