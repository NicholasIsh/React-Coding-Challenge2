// Importing React and necessary hooks for routing and accessing URL parameters
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRoutes } from '../context/RouteContext';
import data from '../data/mockData.json'; // Importing mock data for route details
import './RouteDetail.css'; // Importing CSS for styling the RouteDetail components

/**
 * RouteDetail Component
 * Purpose: Displays detailed information about a specific travel route.
 * Description:
 * - This component fetches route data based on the route ID obtained from the URL.
 * - It provides functionality to add a route to the cart and navigate to the purchase page or back to the routes list.
 */
function RouteDetail() {
    const { id } = useParams(); // Retrieving route ID from URL parameters
    const route = data.find(r => r.id === id); // Searching for the route in the data by ID
    const { addToCart } = useRoutes(); // Using context to get the addToCart function
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Conditional rendering to handle the case where no route is found
    if (!route) {
        return <div className="detailContainer">Route not found!</div>;
    }

    // Function to handle adding the route to the cart and navigating to the purchase page
    const handlePurchase = () => {
        addToCart({...route, quantity: 1}); // Adding the route to the cart with initial quantity set to 1
        navigate('/purchase'); // Navigating to the ticket purchase page
    };

    // JSX markup for displaying route details and purchase options
    return (
        <div className="detailContainer">
            <h1 className="detailHeader">{route.title}</h1>
            <div className="detailRow">
                <span className="detailTitle">Duration:</span>
                <span className="detailText">{route.duration}</span>
            </div>
            <div className="detailRow">
                <span className="detailTitle">Stops:</span>
                <span className="detailText">{route.stops}</span>
            </div>
            <div className="detailRow">
                <span className="detailTitle">Price:</span>
                <span className="detailText">R{route.price.toFixed(2)}</span>
            </div>
            <div className="detailRow">
                <span className="detailTitle">Description:</span>
                <span className="detailText">{route.description}</span>
            </div>
            <div className="detailButtonGroup">
                <button className="detailButton backButton" onClick={() => navigate(-1)}>Back</button>
                <button className="detailButton" onClick={handlePurchase}>Purchase Ticket</button>
            </div>
        </div>
    );
}

// Exporting the RouteDetail component for use in other parts of the application
export default RouteDetail;
