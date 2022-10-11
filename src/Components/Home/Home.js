import React from 'react';
import Default from '../Default/Default';
import image from '../../images/19629.jpg';
import './Home.css'
const Home = () => {
    return (
        <div className='h-100vh'>
            <img className='h-[400px] container mx-auto' src={image} alt="" />
            <Default></Default>
        </div>
    );
};

export default Home;