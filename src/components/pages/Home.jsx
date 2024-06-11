import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import heroImage from '../../assets/hero.png';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <img src={heroImage} className={styles.heroImage} alt="" />
      <div className={styles.featuredContainer}>
        <h2>Featured Items</h2>
        <div className={styles.imageContainer}>
          <img className={styles.featuredImage} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          <img className={styles.featuredImage} src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
          <img className={styles.featuredImage} src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="" />
          <img className={styles.featuredImage} src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="" />
        </div>
      </div>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaText}>Shop til you drop!</h2>
        <NavLink to='/shop'>
          <Button label='Shop Now' className={styles.callToActionBtn} />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;