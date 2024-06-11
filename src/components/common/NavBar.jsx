import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from '../../styles/NavBar.module.css';
import bagIcon from '../../assets/bag.svg';
import CartSidebar from './CartSidebar';

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCardSidebar = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className={styles.navBarContainer}>
      <h1>
        <NavLink
          to='/'
          className={styles.navLink}
        >
          The General Store
        </NavLink>
      </h1>
      <div className={styles.navList}>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <button className={styles.cartButton} onClick={toggleCardSidebar}>
          <img className={styles.bagIcon} src={bagIcon} alt="" />
          <div className={styles.itemCount}>{totalQuantity}</div>
        </button>
      </div>
      {isCartOpen && <CartSidebar toggleCardSidebar={toggleCardSidebar} />}
    </header>
  );
};

export default NavBar;