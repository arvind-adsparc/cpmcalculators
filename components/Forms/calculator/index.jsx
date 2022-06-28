import styles from "../../../styles/CalculatorForm.module.scss";
import Input from "../../Input/input";

const CalculatorForm = () => {
  return (
    <div className={styles.formContainer}>
      <h3>CPM Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>

      <div>
        <Input name="impressions" label="Impressions" type="text" />
        <Input name="cpm" label="CPM($)" type="text" />
        <Input name="cost" label="Campaign Cost($)" type="text" />

        <div className={styles.ctas}>
          <button className={styles.btn}>Calculate</button>
          <button className={styles.btn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
