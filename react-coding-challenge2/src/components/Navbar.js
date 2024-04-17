import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navLink">Available Routes</Link>
            <Link to="/purchase" className="navLink">Ticket Purchase</Link>
        </nav>
    );
}

export default Navbar;
