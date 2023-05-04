import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllChef = () => {
    const allChef = useLoaderData()
    console.log(allChef)
    return (
        <div>
            <h2>allchef page</h2>
        </div>
    );
};

export default AllChef;