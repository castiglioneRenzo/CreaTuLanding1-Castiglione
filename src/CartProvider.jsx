import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


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
    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    }
    const clearCart = () => {
        setCart([]);
    }
    const getItem = (itemId) => {
        return cart.find(item => item.id === itemId);
    }
    const getItems = () => {
        return cart;
    }
    const getQuantity = (itemId) => {
        return cart.reduce((total, item) => {
            return item.id === itemId ? total + item.quantity : total;
        }, 0);
    }
    const getQuantityTotal = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getItem, getQuantity, getQuantityTotal, getItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;