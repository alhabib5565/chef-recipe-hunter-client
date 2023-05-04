import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipeinfo = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe
    return (
        <div className="border-2 border-sky-500 p-3 relative">
            <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Name: </span> {recipe_name}</p>
            <p className='mb-2 text-slate-500'><span className='font-semibold text-gray-800'>Cooking Method: </span> {cooking_method}</p>
            <p className='font-semibold text-gray-800'>Ingradients:</p>
            <ul className='mb-2 text-slate-500'>
                {
                    ingredients.slice(0, 5).map((ingredient, index) => <li className='ml-2' key={index}>{ingredient}</li>)
                }
            </ul>
            <div className='absolute bottom-0'>
            <div className='flex  align-items-center'>
                        {/* <Rating 
                        style={{ maxWidth: 150, }} 
                        className='text-red-600'
                        value={Math.round(rating.number || 0)} readOnly />
                        <span className='ms-3'>{rating}</span> */}
                        <Rating
                        placeholderRating={ rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating> <span>{rating}</span>
                    </div>
            </div>
            
        </div>
    );
};

export default Recipeinfo;