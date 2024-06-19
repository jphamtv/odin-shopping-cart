import PropTypes from "prop-types";
import styles from "../../styles/Overlay.module.css";

const Overlay = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>;
};

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
