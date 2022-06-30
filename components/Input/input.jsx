import styles from "../../styles/Input.module.scss";

const Input = ({ name, label, type, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}:</label>

      <input type={type} id={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
