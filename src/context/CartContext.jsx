import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [email, setEmail] = useState(() => {
        return localStorage.getItem('email') || '';
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    const addItem = (item) => {
        setCartItems((prevItems) => {
            const newCartItems = [...prevItems, item];
            return newCartItems;
        });
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => {
            const updatedCartItems = prevItems.filter(item => item.id !== id);
            return updatedCartItems;
        });
    };

    const updateItemQuantity = (id, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const updateEmail = (newEmail) => {
        setEmail(newEmail);
    };

    return (
        <CartContext.Provider value={{ cartItems, email, addItem, removeItem, updateItemQuantity, updateEmail }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
