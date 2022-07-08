import { useState } from "react";
import { Alert } from "antd";
import { validateFn } from "../../../utilis/cpmCalValidation";
import Input from "../../Input/input";
import CalculateModal from "../../Modal/calculateModal";
import styles from "../../../styles/CalculatorForm.module.scss";

const CalculatorForm = ({ name }) => {
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
      case "impressions":
        setValueOne(data.value);
        break;
      case "cpm":
        setValueTwo(data.value);
        break;
      case "campaignCost":
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
    // setOpenModal(true); // for testing
  };

  // const onClear = (e) => {
  //   setValueOne("");
  //   setValueTwo("");
  //   setValueThree("");
  // };
  return (
    <div className={styles.formContainer}>
      <h3>{name} Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>

      {error && <Alert message={error} type="error" />}

      <form onSubmit={onCalculate}>
        <Input
          name="impressions"
          label="Impressions"
          type="number"
          placeholder={"This is how many times the ad is viewed on a website"}
          getValuesFn={getValues}
        />
        <Input
          name="cpm"
          label="CPM($)"
          type="number"
          placeholder={"Cost per thousand impressions in one ad unit"}
          getValuesFn={getValues}
        />
        <Input
          name="campaignCost"
          label="Campaign Cost($)"
          type="number"
          placeholder={"Total budget for the campaign"}
          getValuesFn={getValues}
        />

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
