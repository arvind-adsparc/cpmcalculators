import styles from "../../styles/Input.module.scss";

const Input = ({ name, label, type }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}:</label>

      <input type={type} id={name} />
    </div>
  );
};

export default Input;
