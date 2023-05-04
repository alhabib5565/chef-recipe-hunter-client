import React from 'react';
import { Link } from 'react-router-dom';

const Achef = ({ chef }) => {
    const { chef_id, chef_picture, chef_name, experience, numberOfRecipes, likes } = chef
    console.log(chef)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-52' src={chef_picture} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p><span className='font-semibold'>Esperience: </span> {experience}</p>
                <div className='flex justify-between'>
                    <p><span className='font-semibold'>Recipes: </span> {numberOfRecipes}</p>
                    <><span className='font-semibold'>Likes: </span> {likes}</>                    
                </div>
                <div className="card-actions justify-end">
                    <Link to={`chef/${chef_id}`}><button className=' bg-sky-500 px-5 py-2 rounded-full text-white text-xl font-semibold hover:bg-sky-700'>veiw recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Achef;