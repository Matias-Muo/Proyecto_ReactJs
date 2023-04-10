import React, { createContext, useState } from 'react';
export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {

 const [cartItems, setCartItems] = useState([]);
 
  const addItem = (product, count) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === product.id);

    if (existingItemIndex !== -1) {
      
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count += count;
      setCartItems(updatedCartItems);
      
    } else {
     
      setCartItems(prevState => [...prevState, { ...product, count }]);
    }
  };



  const removeItem = () => {
   
    const tempCart=cartItems.slice(1);
    setCartItems(tempCart)
  };


  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
