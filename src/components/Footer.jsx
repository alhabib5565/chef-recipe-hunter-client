import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaHome, FaInstagram, FaPhone, FaVoicemail } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-950 p-3 mt-16 text-gray-200'>
      <div className='max-w-7xl pt-14 pb-10  mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center border-b-2 border-gray-500 pb-3'>
          <div>
            <span className='text-slate-300'>Get connected with us on social networks:</span>
          </div>
          <div className='flex'>
            <a href='' className='mr-5'>
              <FaFacebook className='text-2xl text-white'></FaFacebook>
            </a>
            <a href='' className='mr-5'>
              <FaInstagram className='text-2xl text-white'></FaInstagram>
            </a>
            <a href='' className='mr-5'>
              <FaGoogle className='text-2xl text-white'></FaGoogle>
            </a>
            <a href='' className='mr-5'>
              <FaGithub className='text-2xl text-white'></FaGithub>
            </a>
          </div>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 lg:grid-cols-4'>
          <div className='mb-5'>
            <h2 className='text-gray-300 uppercase text-xl font-bold mb-3'>products</h2>
            <p className='text-gray-50 mb-2'>Vuna khicuri</p>
            <p className='text-gray-50 mb-2'>Begun baja</p>
            <p className='text-gray-50 mb-2'>Beguni</p>
            <p className='text-gray-50 mb-2'>Piaji...</p>
          </div>
          <div className='mb-5'>
            <h2 className='text-gray-300 uppercase text-xl font-bold mb-3'>service</h2>
            <p className='text-gray-50 mb-2'>Arrange Function</p>
            <p className='text-gray-50 mb-2'>Cooking Good Food</p>
            <p className='text-gray-50 mb-2'>Short Time Delivery</p>
            <p className='text-gray-50 mb-2'>Nice Place...</p>
          </div>
          <div className='mb-5'>
            <h2 className='text-gray-300 uppercase text-xl font-bold mb-3'>contact</h2>
            <p className='text-gray-50 mb-2 flex gap-3 items-center'>
              <FaHome className='text-2xl text-white'></FaHome>
              <span>Sherpur, Nakla</span>
            </p>

            <p className='text-gray-50 mb-2 flex gap-3 items-center'>
              <FaPhone className='text-2xl text-white'></FaPhone>
              <span>01405-46****, 01877-69****</span>
            </p>
            <p className='text-gray-50 mb-2 flex gap-3 items-center'>
              <FaVoicemail className='text-2xl text-white'></FaVoicemail>
              <span>habib@gamil.com</span>
            </p>
            
          </div>
          <div className='mb-5'>
            <h2 className='text-gray-300 uppercase text-xl font-bold mb-3'>details</h2>
            <p className='text-gray-50 mb-2'>At our restaurant, we take pride in offering a unique dining experience that you won't find anywhere else. Our chefs use only the freshest and highest quality ingredients to create mouthwatering dishes that will leave you satisfied. With exceptional customer service and a welcoming atmosphere, we strive to make every visit unforgettable etc. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;