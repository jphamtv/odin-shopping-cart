import PropTypes from "prop-types";

const Button = ({ type, label, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;