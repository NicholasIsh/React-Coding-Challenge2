import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRoutes } from '../context/RouteContext';
import data from '../data/mockData.json';
import './RouteDetail.css'; 

function RouteDetail() {
    const { id } = useParams();
    const route = data.find(r => r.id === id);
    const { addToCart } = useRoutes();
    const navigate = useNavigate();

    if (!route) {
        return <div className="detailContainer">Route not found!</div>;
    }

    const handlePurchase = () => {
        addToCart({...route, quantity: 1});
        navigate('/purchase');
    };

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

export default RouteDetail;
