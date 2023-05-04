import React, { useContext, useState } from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Header = () => {
  let [show, setShow] = useState(true)
  const { user, logoutUser } = useContext(AuthContext)

  const signOutUser = () => {
    logoutUser()
      .then(() => {
        toast.success('You have successfully been logged out')
      })
      .catch(error => {
        toast.error(error.message)
        console.log(error)
      })
  }
  return (
    <header className=' bg-slate-100'>
      <nav className='flex justify-between items-center h-20 w-[90%] mx-auto'>
        <div>
          <Link to='/' className='text-3xl text-sky-500 md:text-5xl font-extrabold'>Khana <span className='text-orange-500'>Pina</span></Link>
        </div>
        <div className={`duration-500 md:static absolute left-0 min-h-[50vh] md:min-h-fit w-full md:w-auto flex items-center px-6  ${show ? "top-[-100%]" : "top-[10%]"}`}>
          <ul className='flex md:center md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
            <li className='hover:text-blue-700'>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-500"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className='hover:text-blue-700'>
              <NavLink
                to='/blog'
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-500"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className='hover:text-blue-700'>
              <NavLink
                to='/login'
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-500"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className='hover:text-blue-700'>
              <NavLink
                to='/register'
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-500"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Register
              </NavLink>
            </li>

          </ul>
        </div>
        <div className='flex gap-4 items-center'>

          {
            user ? <>
              <img className='w-14 h-14 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
              <button onClick={signOutUser} className='bg-sky-500 px-5 py-2 rounded-full text-white text-xl font-semibold hover:bg-sky-700'>
                Logout
              </button>
            </>
              : <Link to="/login"><button className='bg-sky-500 px-5 py-2 rounded-full text-white text-xl font-semibold hover:bg-sky-700'>
                Login
              </button></Link>
          }

          {show ? <FaBars onClick={() => setShow(!show)} className='text-3xl cursor-pointer md:hidden'></FaBars> :
            <FaRegWindowClose onClick={() => setShow(!show)} className='text-3xl cursor-pointer md:hidden'></FaRegWindowClose>}
        </div>
      </nav>
    </header>
  );
};

export default Header;