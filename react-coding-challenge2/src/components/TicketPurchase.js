// Importing React and useState for managing state, and hooks for navigation and context access
import React, { useState } from 'react';
import { useRoutes } from '../context/RouteContext'; // Access to cart actions and state
import { useNavigate } from 'react-router-dom'; // Hook for programmatically changing routes
import './TicketPurchase.css';  // Styling for the Ticket Purchase page

/**
 * TicketPurchase Component
 * Purpose: Manages the ticket purchasing process including quantity adjustments and checkout functionality.
 * Description:
 * - This component displays all the tickets currently added to the cart.
 * - Users can modify ticket quantities or remove tickets from the cart.
 * - It also handles navigation back to the routes list and forwards to the confirmation page after purchase.
 */
function TicketPurchase() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useRoutes(); // Cart context for managing ticket data
    const [loading, setLoading] = useState(false); // State to manage loading status during checkout process
    const navigate = useNavigate(); // Navigation function

    // Function to handle ticket removal from the cart
    const handleRemove = (id) => {
        removeFromCart(id); // Removing item by ID
    };

    // Function to handle changes in ticket quantity
    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value, 10); // Ensuring the value is an integer
        if (isNaN(quantity) || quantity < 1) { // Defaulting to 1 if input is invalid
            updateQuantity(id, 1);
        } else {
            updateQuantity(id, quantity); // Updating the quantity in the cart
        }
    };

    // Function to handle the checkout process
    const handleCheckout = () => {
        if (cart.some(item => isNaN(item.quantity) || item.quantity < 1)) { // Validation to ensure all quantities are valid
            return;
        }

        setLoading(true); // Indicate loading state
        setTimeout(() => {
            clearCart(); // Clear the cart after purchase
            navigate('/confirmation'); // Navigate to confirmation page
            setLoading(false); // Reset loading state
        }, 2000);
    };

    // Function to navigate back to the routes list
    const goBackToAddRoutes = () => {
        navigate('/'); // Navigate back to the home/available routes page
    };

    // Early return if cart is empty, providing option to go back and add tickets
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

    // Calculating the total amount based on the cart contents
    const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 0), 0);

    // Main component rendering including all cart items and total
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
                        <button className="removeButton" onClick={() => handleRemove(item.id)}>
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

// Exporting the TicketPurchase component for use across the application
export default TicketPurchase;
