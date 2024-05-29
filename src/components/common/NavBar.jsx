import { NavLink } from "react-router-dom";
import styles from '../../styles/NavBar.module.css';
import bagIcon from '../../assets/bag.svg';
import Cart from './Cart';

const NavBar = () => {
  return (
    <header className={styles.navBarContainer}>
      <h1>Shopping Cart Project</h1>
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
        {/* <Cart />   */}
        <button className={styles.cartButton}>
          <img className={styles.bagIcon} src={bagIcon} alt="" />
          {/* <div>{itemCount}</div> */}
          <div className={styles.itemCount}>3</div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;