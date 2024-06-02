import { useState } from 'react';
import styles from '../../styles/Cart.module.css';
import Button from './Button';

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const cartItems = []; // Replace with cart items from context

  const subTotal = 0; // Replace with the calculated subtotal
  const tax = subTotal * .10; 
  const orderTotal = subTotal + tax; 

  const renderIsEmpty = () => <div>Cart is empty</div>;

  if (isEmpty) {
    return renderIsEmpty();
  }

  return (
    <div>
      <div>
        <Button label='X' type='cancel' onClick={() => {/* Handle close cart */}}/>
      </div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <div>{item.title}</div>
          <div>Qty: {item.quantity}</div>
          <div>${item.price}</div>
        </div>
      ))}
      <div>
        <div>Subtotal: ${subTotal.toFixed(2)}</div>
        <div>Tax: ${tax.toFixed(2)}</div>
        <div>Order total: ${orderTotal.toFixed(2)}</div>
      </div>
      <Button type='submit' label='Submit Order' onClick={() => {/* Handle checkout */ }} />
    </div>
  );
};

export default Cart;