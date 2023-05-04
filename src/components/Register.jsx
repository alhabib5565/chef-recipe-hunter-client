import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google-btn.png'
import github from '../assets/github-btn.png'
import { AuthContext } from '../authProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    let [err, setError] = useState('')
    let {userCreate} = useContext(AuthContext)
    const navigate = useNavigate()
    const creatUser = (event) => {
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        const name = form.name.value 
        const photo = form.photo.value 
        console.log(email, password, photo, name) 

        setError('')
        if (password.length < 6) {
            setError("Your password must be at least 6 characters"); 
            return
        }
        userCreate(email, password)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser)
            setError('')
            toast.success('Create User Successfull')
            navigate('/login')
            updateProfile(result.user, {displayName:name, photoURL: photo})
            .then(() => {
                toast.success('updated profile')
            })
            .catch(error => {
                setError(error.message)
            })
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
                    <h1 className="text-4xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={creatUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" name='photo' className="input input-bordered" />
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
                                <span>already have an account? Please </span>
                                <Link className='ml-2 text-blue-500' to='/login'> Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Toaster />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;