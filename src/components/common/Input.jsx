import PropTypes from "prop-types";
import Button from "./Button";
import '../styles/Input.css';

const Input = ({ type, name, value, onChange }) => {
  return (
    <div className="input">
      <Button />
      <input name={name} type={type} value={value} onChange={onChange} />
      <Button />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;