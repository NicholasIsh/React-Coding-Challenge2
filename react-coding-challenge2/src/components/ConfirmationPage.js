// Importing React and necessary hooks from react-router-dom
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Importing CSS for styling the confirmation page components
import './ConfirmationPage.css';  

/**
 * ConfirmationPage Component
 * Purpose: Displays a confirmation message to the user after a successful ticket purchase.
 * Description:
 * - This component is shown post-purchase and provides feedback that the transaction was successful.
 * - Includes a button that redirects the user back to the home page where they can view available routes or make more purchases.
 */
function ConfirmationPage() {
    // Hook for navigation
    const navigate = useNavigate();

    return (
        <div className="confirmationContainer">
            <h1 className="confirmationHeader">Thank you for your purchase!</h1>
            <p className="confirmationText">Your tickets have been booked successfully.</p>
            <button className="homeButton" onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
} 

export default ConfirmationPage;
