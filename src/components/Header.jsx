import React, { useState } from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Header = () => {
  let [show, setShow] = useState(true)
  return (
    <header className='bg-white'>
      <nav className='flex justify-between items-center h-20 w-[90%] mx-auto'>
        <div>
          <h1 className='text-3xl text-stone-700 md:text-5xl font-extrabold'>Navbar</h1>
        </div>
        <div className={`duration-500 md:static absolute bg-white left-0 min-h-[50vh] md:min-h-fit w-full md:w-auto flex items-center px-6  ${show ? "top-[-100%]" : "top-[10%]"}`}>
          <ul className='flex md:center md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
            <li> 
              <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-800"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                   Home
              </NavLink>
            </li>
            <li> 
              <NavLink
                    to='/blog'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-800"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                   Blog
              </NavLink>
            </li>
            <li> 
              <NavLink
                    to='/login'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-800"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                   Login
              </NavLink>
            </li>
            <li> 
              <NavLink
                    to='/register'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-800"
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
          <button className='bg-sky-500 px-5 py-2 rounded-full text-white text-xl font-semibold hover:bg-sky-700'>
            Sign Up
          </button>
          {show ? <FaBars onClick={() => setShow(!show)} className='text-3xl cursor-pointer md:hidden'></FaBars> :
            <FaRegWindowClose onClick={() => setShow(!show)} className='text-3xl cursor-pointer md:hidden'></FaRegWindowClose>}
        </div>
      </nav>
    </header>
  );
};

export default Header;