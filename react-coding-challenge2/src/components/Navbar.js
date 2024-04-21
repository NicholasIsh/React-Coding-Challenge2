// Importing React for component creation and Link from react-router-dom for navigation
import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// Importing CSS for styling the Navbar components
import './Navbar.css';  


/**
 * Navbar Component
 * Purpose: Provides a navigation bar at the top of every page.
 * Description:
 * - This component uses `Link` components from react-router-dom to enable SPA (Single Page Application) navigation without page reloads.
 * - It facilitates easy access to the 'Available Routes' and 'Ticket Purchase' pages.
 */
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navLink">Available Routes</Link>
            <Link to="/purchase" className="navLink">Ticket Purchase</Link>
        </nav>
    );
}

export default Navbar;
