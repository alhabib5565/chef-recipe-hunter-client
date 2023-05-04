import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assets/google-btn.png'
import github from '../assets/github-btn.png'
import { AuthContext } from '../authProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    let [err, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const { googleLogin, githubLogin, loginUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signInUser = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('User Login successfull')
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.message)
        })
    }

   

    const loginWithGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                toast.success('Google Login Successfull')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }
    
    const loginWithGithub = () => {
        githubLogin(githubProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                toast.success('Gtihub Login Successfull')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={signInUser} className="card-body">
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
                            {
                                err && <p className='text-red-500'>{err}</p>
                            }
                            
                            <label className="label">
                                <span>new this website? Please </span>
                                <Link className='ml-2 text-blue-500' to='/register'> Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <span className='text-center mt-3'>or</span>
                        <div className="form-control mt-3">
                            <button onClick={loginWithGoogle}>
                                <img className='mb-3 cursor-pointer' src={google} alt="" />
                            </button>
                            <button onClick={loginWithGithub}>
                                <img className='cursor-pointer' src={github} alt="" />
                            </button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;