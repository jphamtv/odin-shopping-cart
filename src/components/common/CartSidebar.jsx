import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from '../../styles/CartSidebar.module.css';
import Button from './Button';

const CartSidebar = ({ toggleCardSidebar }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const isEmpty = cartItems.length === 0;
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subTotal * .10; 
  const orderTotal = subTotal + tax; 

  return (
    <div className={styles.cartSidebar}>
      <header className={styles.header}>
        <Button label='✕' type='cancel' onClick={toggleCardSidebar} className={styles.closeBtn} />
        <h2 className={styles.headerTitle}>Shopping Cart</h2>
      </header>
      {isEmpty ? (
        <div>Cart is empty</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.productContainer}>
              <div className={styles.imageContainer}>
                <img src={item.image} className={styles.productImage} alt={item.title} />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.topRow}>
                  <div>{item.title}</div>
                  <div>${item.price.toFixed(2)}</div>
                </div>
                <div className={styles.bottomRow}>
                  <div>Qty: {item.quantity}</div>
                  <Button type='submit' label='Remove' onClick={() => removeFromCart(item.id)} className={styles.removeBtn}/>
                </div>
              </div>
              <div>
              </div>
            </div>
          ))}
          <div className={styles.priceContainer}>
            <div>Subtotal ({totalQuantity} items): ${subTotal.toFixed(2)}</div>
            <div>Estimated tax: ${tax.toFixed(2)}</div>
            <hr></hr>
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