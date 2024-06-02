import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from '../../styles/CartSidebar.module.css';
import Button from './Button';

const CartSidebar = ({ toggleCardSidebar }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const isEmpty = cartItems.length === 0;

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subTotal * .10; 
  const orderTotal = subTotal + tax; 

  return (
    <div className={styles.cartSidebar}>
      <header>
        <Button label='X' type='cancel' onClick={toggleCardSidebar} />
        <h2>Cart</h2>
      </header>
      {isEmpty ? (
        <div>Cart is empty</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} className={styles.img} alt={item.title} />
              <div>{item.title}</div>
              <div>Qty: {item.quantity}</div>
              <div>${item.price}</div>
              <Button type='submit' label='Remove' onClick={() => removeFromCart(item.id)} />
            </div>
          ))}
          <div>
            <div>Subtotal: ${subTotal.toFixed(2)}</div>
            <div>Tax: ${tax.toFixed(2)}</div>
            <div>Order total: ${orderTotal.toFixed(2)}</div>
          </div>
          <Button type='reset' label='Clear Cart' onClick={clearCart} />
          <Button type='submit' label='Submit Order' onClick={() => alert(`Your total is $${orderTotal.toFixed(2)}. Thank you for shopping with us!`)} />          
        </>
      )}
    </div>
  );
};

export default CartSidebar;