import React from 'react';
import benner from '../assets/bennar.jpg'
import AllChef from './AllChef';
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${benner})`}} className='h-72 md:h-96 '>
            <div className='bg-black bg-opacity-30 h-full w-full flex items-center justify-center '>
            <h1 className='text-5xl text-slate-300 font-bold'>It's all about good <br /> <span className=' text-sky-500 text-6xl'>food</span></h1>
            </div>
            <AllChef></AllChef>
        </div>
    );
};

export default Home;