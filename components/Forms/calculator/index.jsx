import { useState } from "react";
import { Alert } from "antd";
import { validateFn } from "../../../utilis/cpmCalValidation";
import Input from "../../Input/input";
import CalculateModal from "../../Modal/calculateModal";
import styles from "../../../styles/CalculatorForm.module.scss";

const CalculatorForm = ({ name, formContent }) => {
  const [openModal, setOpenModal] = useState(false);

  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [valueThree, setValueThree] = useState("");
  const [error, setError] = useState("");
  const [calculation, setCalculation] = useState("");

  const closeModal = () => {
    setOpenModal(false);
  };

  const getValues = (data) => {
    switch (data.name) {
      case "valueOne":
        setValueOne(data.value);
        break;
      case "valueTwo":
        setValueTwo(data.value);
        break;
      case "valueThree":
        setValueThree(data.value);
        break;
      default:
        break;
    }
  };

  const onCalculate = (e) => {
    e.preventDefault();
    // const valueOneData = { value: valueOne, label: "Impressions" };
    // const valueTwoData = { value: valueTwo, label: "CPM" };
    // const valueTHreeData = { value: valueThree, label: "Campaign Cost" };
    const result = validateFn(valueOne, valueTwo, valueThree);

    if (result.status) {
      setOpenModal(true);
      setError(false);
      setCalculation(result.message);
    } else {
      setError(result.message);
      setOpenModal(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>{name} Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>

      {error && <Alert message={error} type="error" />}

      <form onSubmit={onCalculate}>
        {formContent.map((info) => (
          <Input
            key={info.name}
            name={info.name}
            label={info.label}
            type={info.type}
            placeholder={info.placeholder}
            getValuesFn={getValues}
          />
        ))}

        <div className={styles.ctas}>
          <button type="submit" className={styles.btn}>
            Calculate
          </button>
          <button type="reset" className={styles.btn}>
            Clear
          </button>
        </div>

        <CalculateModal
          calculation={calculation}
          openModal={openModal}
          closeModal={closeModal}
        />
      </form>
    </div>
  );
};

export default CalculatorForm;
