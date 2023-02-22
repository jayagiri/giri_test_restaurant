import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='px-6 py-4'>
            <div className='flex justify-between h-10'>
                <div className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#46E278"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" /></svg>
                </div>
                <div>
                    <Link className='hover:text-green-400 text-2xl py-2 px-6' to="/">Home </Link>
                    <Link className='hover:text-green-400 text-2xl py-2 px-6' to="/about-us">Menu</Link>
                    <Link className='hover:text-green-400 text-2xl py-2 px-6' to="/reservation">Reservation</Link>
                </div>
                <div>
                    <Link className='hover:bg-blue-700' to="/admin">Admin </Link>
                    <Link className='hover:bg-blue-700' to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar
