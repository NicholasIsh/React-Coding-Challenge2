import React, { useState } from 'react';
import { useRoutes } from '../context/RouteContext';
import { useNavigate } from 'react-router-dom';
import './TicketPurchase.css';  // Make sure the CSS path is correct

function TicketPurchase() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useRoutes();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value, 10);
        if (isNaN(quantity) || quantity < 1) {
            updateQuantity(id, 1);
        } else {
            updateQuantity(id, quantity);
        }
    };

    const handleCheckout = () => {
        if (cart.some(item => isNaN(item.quantity) || item.quantity < 1)) {
            return;
        }

        setLoading(true);
        setTimeout(() => {
            clearCart();
            navigate('/confirmation');
            setLoading(false);
        }, 2000);
    };

    const goBackToAddRoutes = () => {
        navigate('/'); // Navigate back to the home/available routes page
    };

    if (cart.length === 0) {
        return (
            <div className="purchaseContainer">
                <h1 className="purchaseHeader">Ticket Purchase</h1>
                <p className="emptyCartMessage">No tickets in your cart.</p>
                <div className="buttonGroup">
                    <button className="addMoreTicketsButton" onClick={goBackToAddRoutes}>
                        Add Tickets
                    </button>
                </div>
            </div>
        );
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 0), 0);

    return (
        <div className="purchaseContainer">
            <h1 className="purchaseHeader">Ticket Purchase</h1>
            {cart.map((item, index) => (
                <div key={index} className="ticketItem">
                    <h2 className="ticketTitle">{item.title} - R{item.price.toFixed(2)} each</h2>
                    <p>
                        Quantity:
                        <input 
                            type="number"
                            className="quantityInput"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            min="1"
                        />
                        <button 
                            className="removeButton"
                            onClick={() => handleRemove(item.id)}
                        >
                            Remove
                        </button>
                    </p>
                </div>
            ))}
            <div className="totalAmount">Total Amount: R{totalAmount.toFixed(2)}</div>
            <div className="buttonGroup">
                <button className="checkoutButton" disabled={loading || cart.length === 0} onClick={handleCheckout}>
                    Checkout
                </button>
                <button className="addMoreTicketsButton" onClick={goBackToAddRoutes}>
                    Add More Tickets
                </button>
            </div>
        </div>
    );
}

export default TicketPurchase;
