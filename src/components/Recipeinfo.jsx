import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipeinfo = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe
    return (
        <div className="border-2 border-sky-500 p-3 relative rounded">
            <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Name: </span> {recipe_name}</p>
            {/* <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Cooking Method: </span> {cooking_method.slice(0, 200)}</p> */}
            {
                cooking_method.length < 200 ? <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Cooking Method: </span> {cooking_method}</p>
                    : <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Cooking Method: </span> {cooking_method.slice(0, 200)} ... read more</p>
            }
            <p className='font-semibold text-gray-800'>Ingradients:</p>
            <ul className='mb-2 text-slate-500'>
                {

                    ingredients.slice(0, 7).map((ingredient, index) => <li className='ml-3' key={index}>{ingredient}</li>)
                }
            </ul>
            <div className='flex  align-items-center'>
                <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                ></Rating> <span className='ml-4'>{rating}</span>
            </div>
            <button className=' bg-sky-500 px-5 mb-auto py-2 rounded-full w-full text-white text-xl font-semibold hover:bg-sky-700'>favorite</button>
        </div>
    );
};

export default Recipeinfo;