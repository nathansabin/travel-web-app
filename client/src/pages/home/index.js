import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import travel from '../../assets/images/airplane_stock.jpg';

function Home() {
    return (
        <div className='home mb-2'>
            <h2 className='header mt-2 mb-3'>Welcome</h2>
            <div className='hori'>
                <nav className='bio'>
                    <h3>Get started planing out your next vacation!</h3>
                    <a href="/login"><button className='btn btn-secondary btn-cust'>Get Started</button></a>
                </nav>
                <img className='image' src={travel} alt='travel'></img>
            </div>
        </div>
    );
}

export default Home;