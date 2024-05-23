import bagIcon from '../../assets/bag.svg';
import styles from '../../styles/Cart.module.css';

const Cart = ({ itemCount }) => {
  return (
    <button className={styles.cartButton}>
      <img className={styles.bagIcon} src={bagIcon} alt="" />
      {/* <div>{itemCount}</div> */}
      <div className={styles.itemCount}>3</div>
    </button>
  );
};

export default Cart;