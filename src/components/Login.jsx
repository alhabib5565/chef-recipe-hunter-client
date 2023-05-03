import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/google-btn.png'
import github from '../assets/github-btn.png'
import { AuthContext } from '../authProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const { googleLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const loginUser = (event) => {
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password) 
        toast.success('Here is your toast.')
    }
    const loginWithGoogle = () => {
        googleLogin(googleProvider)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <span>new this website? Please </span>
                                <Link className='ml-2 text-blue-500' to='register'> Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <span className='text-center mt-3'>or</span>
                        <div className="form-control mt-3">
                            <button onClick={loginWithGoogle}>
                                <img  className='mb-3 cursor-pointer' src={google} alt="" />
                            </button>
            <Toaster />
                            <img className='cursor-pointer' src={github} alt="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;