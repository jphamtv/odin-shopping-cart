import styles from '../../styles/Cart.module.css';
import Button from './Button';

const Cart = () => {
  const cartItems = []; // Replace with cart items from context

  const subTotal = 0; // Replace with the calculated subtotal
  const tax = subTotal * .10; 
  const orderTotal = subTotal + tax; 

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
      <Button type='submit' label='Checkout' onClick={() => {/* Handle checkout */ }} />
    </div>
  );
};

export default Cart;