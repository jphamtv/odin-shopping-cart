import styles from '../../styles/Overlay.module.css';

const Overlay = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>
};

export default Overlay;