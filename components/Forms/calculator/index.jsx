import styles from "../../../styles/CalculatorForm.module.scss";

const CalculatorForm = () => {
  return (
    <div className={styles.formContainer}>
      <h3>CPM Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>
    </div>
  );
};

export default CalculatorForm;
