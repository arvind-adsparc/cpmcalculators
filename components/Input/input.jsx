import { useState } from "react";
import styles from "../../styles/Input.module.scss";

const Input = ({ name, label, type, placeholder, getValuesFn }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    getValuesFn({
      name,
      value,
    });
    setValue(value);
  };
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}:</label>

      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
