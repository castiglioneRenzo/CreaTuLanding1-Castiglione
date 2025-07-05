import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Adds an item to the cart, updating quantity if it already exists
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
            return prevCart.map(i =>
                i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            );
            } else {
            return [...prevCart, item];
            }
        });
    }
    // Removes a specific item from the cart by its ID
    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    }
    // Clears the entire cart
    const clearCart = () => {
        setCart([]);
    }
    // Returns a specific item from the cart by its ID
    const getItem = (itemId) => {
        return cart.find(item => item.id === itemId);
    }
    // Returns all items in the cart
    const getItems = () => {
        return cart;
    }
    // Returns the total quantity of a specific item in the cart
    const getQuantity = (itemId) => {
        return cart.reduce((total, item) => {
            return item.id === itemId ? total + item.quantity : total;
        }, 0);
    }
    // Returns the total quantity of all items in the cart
    const getQuantityTotal = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }
    // Returns the total price of all items in the cart
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getItem, getQuantity, getQuantityTotal, getItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;