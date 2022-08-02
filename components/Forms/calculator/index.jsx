import { useState } from "react";
import { Alert } from "antd";
import { validateFn } from "../../../utilis/calculatorValidataion";
import {
  getCPMResult,
  getRPMResult,
  getEPMVResult,
  getECPMResult,
} from "../../../utilis/calculatorResult";
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

    const result = validateFn(valueOne, valueTwo, valueThree);

    if (result.status) {
      setOpenModal(true);
      setError(false);

      if (name === "CPM") {
        setCalculation(getCPMResult(valueOne, valueTwo, valueThree));
      } else if (name === "RPM") {
        setCalculation(getRPMResult(valueOne, valueTwo, valueThree));
      } else if (name === "eCPM") {
        setCalculation(getECPMResult(valueOne, valueTwo, valueThree));
      } else if (name === "EPMV") {
        setCalculation(getEPMVResult(valueOne, valueTwo, valueThree));
      }

      // setCalculation(result.message);
    } else {
      setError(result.message);
      setOpenModal(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>{name} Calculator</h3>
      <p>Fill in the two fields, and we will assess the third</p>

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
