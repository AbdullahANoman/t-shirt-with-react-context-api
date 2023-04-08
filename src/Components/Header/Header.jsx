import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <Link to="/">Home</Link>
            <Link to="/order">Order Review</Link>
            <Link to="/order">About</Link>
            <Link to="/order">Contact</Link>
        </div>
    );
};

export default Header;