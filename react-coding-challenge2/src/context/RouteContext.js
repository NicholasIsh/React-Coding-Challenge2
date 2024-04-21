// Importing necessary hooks from React for creating context and managing state
import React, { createContext, useContext, useState } from 'react';

// Creating a context object for routing and cart management
const RouteContext = createContext();

/**
 * RouteProvider Component
 * Purpose: Manages and provides a context for the shopping cart including additions, updates, and deletions.
 * Description:
 * - This component encapsulates all cart-related logic and exposes context to the rest of the application.
 * - It allows other components to manipulate the cart contents using provided functions.
 */
export const RouteProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // State to hold the cart items

    // Function to add a route to the cart or increase its quantity if already present
    const addToCart = (route) => {
        const existingRoute = cart.find(item => item.id === route.id);
        if (existingRoute) {
            // If route exists, increment its quantity
            setCart(cart.map(item =>
                item.id === route.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // If route doesn't exist, add it with a starting quantity of 1
            setCart([...cart, { ...route, quantity: 1 }]);
        }
    };

    // Function to update the quantity of a specific item in the cart
    const updateQuantity = (routeId, quantity) => {
        setCart(cart.map(item =>
            item.id === routeId ? { ...item, quantity: quantity } : item
        ));
    };

    // Function to remove an item from the cart
    const removeFromCart = (routeId) => {
        setCart(cart.filter(item => item.id !== routeId));
    };

    // Function to clear all items from the cart
    const clearCart = () => {
        setCart([]);
    };

    // Context provider passing down the cart and cart manipulation functions
    return (
        <RouteContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </RouteContext.Provider>
    );
};

/**
 * Custom hook to use the route context
 * Purpose: Provides a convenient way for components to access and manipulate the cart.
 * Description:
 * - This hook utilizes useContext to access the RouteContext and provide it wherever it's used.
 * - It simplifies access to the context for other components, abstracting away the useContext boilerplate.
 */
export const useRoutes = () => useContext(RouteContext);
