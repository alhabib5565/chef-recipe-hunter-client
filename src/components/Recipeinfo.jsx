import React from 'react';

const Recipeinfo = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe
    return (
        <div className="border-2 border-sky-500 p-3 relative">
            <p><span className='font-semibold'>Name: </span> {recipe_name}</p>
            <p><span className='font-semibold'>Cooking Method: </span> {cooking_method}</p>
            <p className='font-semibold'>Ingradients:</p>
            <ul>
                {
                    ingredients.slice(0, 5).map((ingredient, index) => <li className='ml-2' key={index}>{ingredient}</li>)
                }
            </ul>
            <div className='absolute bottom-0'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                    {rating}
            </div>
            
        </div>
    );
};

export default Recipeinfo;