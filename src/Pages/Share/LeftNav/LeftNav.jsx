import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sports from '../Sports/Sports';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://react-news-drsgon-server-project-hyfkowejm.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h3 className='bg-secondary bg-gradient p-2 text-white rounded'> National News</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <Sports></Sports>
        </div>
    );
};

export default LeftNav;