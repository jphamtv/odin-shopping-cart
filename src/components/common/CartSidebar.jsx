import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../styles/CartSidebar.module.css";
import Button from "./Button";

const CartSidebar = ({ toggleCardSidebar, isCartOpen }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const isEmpty = cartItems.length === 0;
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subTotal * 0.1;
  const orderTotal = subTotal + tax;
  const sideBarClasses = `${styles.cartSidebar} ${isCartOpen ? styles.cartSidebarOpen : styles.cartSidebarHidden}`;

  return (
    <div className={sideBarClasses}>
      <header className={styles.header}>
        <Button
          label="✕"
          type="cancel"
          onClick={toggleCardSidebar}
          className={styles.closeBtn}
        />
        <h2 className={styles.headerTitle}>Shopping Cart</h2>
      </header>
      {isEmpty ? (
        <div className={styles.emptyState}>Cart is empty</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.productContainer}>
              <div className={styles.imageContainer}>
                <img
                  src={item.image}
                  className={styles.productImage}
                  alt={item.title}
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.topRow}>
                  <div>{item.title}</div>
                  <div>${item.price.toFixed(2)}</div>
                </div>
                <div className={styles.bottomRow}>
                  <div>Qty: {item.quantity}</div>
                  <Button
                    type="submit"
                    label="Remove"
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeBtn}
                  />
                </div>
              </div>
              <div></div>
            </div>
          ))}
          <div className={styles.priceContainer}>
            <div>
              Subtotal ({totalQuantity} items): ${subTotal.toFixed(2)}
            </div>
            <div>Estimated tax: ${tax.toFixed(2)}</div>
            <div className={styles.orderTotal}>
              Order total: ${orderTotal.toFixed(2)}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              type="submit"
              label="Submit Order"
              onClick={() =>
                alert(
                  `Your total is $${orderTotal.toFixed(2)}. Thank you for shopping with us!`,
                )
              }
              className={styles.submitOrderBtn}
            />
          </div>
        </>
      )}
    </div>
  );
};

CartSidebar.propTypes = {
  toggleCardSidebar: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
};

export default CartSidebar;
