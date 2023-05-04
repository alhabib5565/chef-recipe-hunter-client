import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Achef from './Achef';

const AllChef = () => {
    const [allChef, setAllChef] = useState([])
    const [load, setload] = useState(true)
    useEffect(()=> {
        fetch(`https://assignment10-server-alhabib5565.vercel.app/alldata`)
        .then(res => res.json())
        .then(data => setAllChef(data))
    },[])
    console.log(allChef)
    return (
        <div className='mt-10 md:mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            {
                allChef.map(chef => <Achef key={chef.chef_id} chef={chef}></Achef>)
            }
           
        </div>
    );
};

export default AllChef;