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
                <div className="card-body lg:w-2/4 relative">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>{chef_bio}</p>
                    <div className='flex flex-col md:flex-row justify-between md:absolute md:top-32'>
                        <p><span className='font-semibold'>Experience: </span> {experience}</p>
                        <p><span className='font-semibold'>Recipes: </span> {numberOfRecipes}</p>
                        <p><span className='font-semibold'>Likes: </span> {likes}</p>
                    </div>
                </div>
            </div>
            <div className='flex max-w-5xl mx-auto mt-10 md:mt-16 p-5 md:p-10 rounded flex-col lg:flex-row justify-between border-2 border-sky-700'>
                
                {
                    recipes.map((recipe, index) => <Recipeinfo key={index} recipe={recipe}></Recipeinfo>)
                }
            </div>
        </>
    );
};

export default ChefDeatails;