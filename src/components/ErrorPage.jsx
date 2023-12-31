
import React from 'react'
import { FaDiceFour } from 'react-icons/fa'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-200 '>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <FaDiceFour className='w-36 h-36 text-sky-500' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-7xl text-sky-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-2xl text-red-600 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className=' bg-sky-500 px-5 py-2 rounded-full text-white text-xl font-semibold hover:bg-sky-700'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage