import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipeinfo from './Recipeinfo';

const ChefDeatails = () => {
    const { chef_id, chef_picture, chef_name, chef_bio, experience, numberOfRecipes, likes, recipes } = useLoaderData()
    console.log(chef_id)
    return (
        <>
            <div className="card lg:card-side bg-base-200 max-w-fit lg:max-w-5xl mx-auto mt-10 md:mt-20 shadow-lg">
                <figure className='lg:w-2/4'><img src={chef_picture} alt="Album" /></figure>
                <div className="card-body lg:w-2/4">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>{chef_bio}</p>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <p><span className='font-semibold'>Experience: </span> {experience}</p>
                        <p><span className='font-semibold'>Recipes: </span> {numberOfRecipes}</p>
                        <p><span className='font-semibold'>Likes: </span> {likes}</p>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-3xl mt-10 md:mt-16 font-semibold text-gray-700'>All Recipes</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto mt-10 md:mt-5 rounded gap-5'>
                
                {
                    recipes.map((recipe, index) => <Recipeinfo key={index} recipe={recipe}></Recipeinfo>)
                }
            </div>
        </>
    );
};

export default ChefDeatails;