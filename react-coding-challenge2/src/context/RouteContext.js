import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (route) => {
        const existingRoute = cart.find(item => item.id === route.id);
        if (existingRoute) {
            setCart(cart.map(item =>
                item.id === route.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...route, quantity: 1 }]);
        }
    };

    const updateQuantity = (routeId, quantity) => {
        setCart(cart.map(item =>
            item.id === routeId ? { ...item, quantity: quantity } : item
        ));
    };

    const removeFromCart = (routeId) => {
        setCart(cart.filter(item => item.id !== routeId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <RouteContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRoutes = () => useContext(RouteContext);
