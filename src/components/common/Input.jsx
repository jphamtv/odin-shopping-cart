import { useState } from 'react';
import PropTypes from "prop-types";
import Button from "./Button";
import styles from '../../styles/Input.module.css';

const Input = ({ type, name, initialValue, onChange }) => {  
  const [value, setValue] = useState(initialValue || 1);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  const handleChange = (event) => {
    const newValue = type === 'number' ? Number(event.target.value) : event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="input">
      <Button label='–'onClick={handleDecrement} />
      <input
        name={name}
        type='text'
        inputMode={type === 'number' ? 'numeric' : 'text'}
        pattern={type === 'number' ? '[1-9]*' : undefined}
        value={value.toString()}
        onChange={handleChange}
        className={styles.inputField}
      />
      <Button label='+' onClick={handleIncrement} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  initialValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Input;