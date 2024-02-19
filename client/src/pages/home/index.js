import React from 'react';
import './home.css';
import travel from '../../assets/images/airplane_stock.jpg';

function Home() {
    return (
        <div className='mx-auto p-8 bg-gray-50 my-6'>
            <div>
                <div className='flex justify-between shadow-2xl p-4'>
                    <nav className='h-auto p-2'>
                    <h2 className='text-3xl pb-2'>Welcome</h2>
                        <h3 className='text-lg my-3'>Get started planing out your next vacation! Find sights, activities and all other sorts of attractions.</h3>
                        <a href="/login"><button className='p-4 bg-secondary-200 font-semibold text-secondary-100 m-6 border rounded-md border-secondary-100 ml-0'>Get Started</button></a>
                    </nav>
                    <img className='w-1/2' src={travel} alt='travel'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;