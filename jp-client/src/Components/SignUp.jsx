import React from 'react';

const SignUP = () => {
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, phone, email, password };
        console.log(user);
    }
    return (

        <div>
            <div className="hero bg-base-200 min-h-[650px]">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left mb-6">
                        <h1 className="text-4xl font-bold">Login now!</h1>
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