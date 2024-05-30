import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist, add it to the cart
      const newProduct = { ...product, quantity: 1 };
      setCartItems([...cartItems, newProduct]);
    }
  };

  const removeFromCart = (productId) => {
    // Remove the product from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
  }; 

  const updateQuantity = (productId, quantity) => {
    // Update the quantity of a specific item in the cart
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartContext, CartProvider };