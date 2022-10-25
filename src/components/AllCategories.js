import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    return (
        <section>
            <div className="md:container mx-auto lg:max-w-7xl px-3 md:px-6 py-10">
                <h2 className="font-serif font-bold text-2xl border-b-2 border-slate-100 pb-2">All Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center mt-6">
                    {
                        categories.map(item => <CategoryCard key={item.id} category={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllCategories;