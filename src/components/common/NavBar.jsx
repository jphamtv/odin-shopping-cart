import { NavLink } from "react-router-dom";
import styles from '../../styles/NavBar.module.css';
import Cart from './Cart';

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <h1>Shopping Cart</h1>
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
        <Cart />  
      </div>
    </div>
  );
};

export default NavBar;