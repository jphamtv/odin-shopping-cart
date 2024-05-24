import PropTypes from "prop-types";
import Button from "./Button";
import styles from '../../styles/Input.module.css';

const Input = ({ type, name, value, onChange }) => {
  

  return (
    <div className="input">
      <Button label='–'/>
      <input name={name} type={type} value={value} onChange={onChange} />
      <Button label='+'/>
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