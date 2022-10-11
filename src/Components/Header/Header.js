import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between p-7 w-screen header'>
            <h1 className='text-4xl font-bold text-violet-500 mx-[200px]'>Quiz 2 Go</h1>
            <nav className='text-2xl font-semibold text-violet-500 mx-[200px]'>
                <Link to='/'></Link>
                <Link to='/home'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;