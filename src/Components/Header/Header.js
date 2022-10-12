import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between p-7 min-w-screen header container mx-auto'>
            <h1 className='text-4xl font-bold text-violet-500'>Quiz 2 Go</h1>
            <nav className='text-2xl font-semibold text-violet-500 '>
                <Link to='/'></Link>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;