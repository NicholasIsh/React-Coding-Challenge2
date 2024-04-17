import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';  

function ConfirmationPage() {
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
