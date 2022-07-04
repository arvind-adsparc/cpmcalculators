import { useState } from "react";
import { Alert } from "antd";
import { validateFn } from "../../../utilis/cpmCalValidation";
import Input from "../../Input/input";
import CalculateModal from "../../Modal/calculateModal";
import styles from "../../../styles/CalculatorForm.module.scss";

const CalculatorForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const [impressions, setImpressions] = useState("");
  const [cpm, setCPM] = useState("");
  const [campaignCost, setCampaignCost] = useState("");
  const [error, setError] = useState("");
  const [calculation, setCalculation] = useState("");

  const closeModal = () => {
    setOpenModal(false);
  };

  const getValues = (data) => {
    switch (data.name) {
      case "impressions":
        setImpressions(data.value);
        break;
      case "cpm":
        setCPM(data.value);
        break;
      case "campaignCost":
        setCampaignCost(data.value);
        break;
      default:
        break;
    }
  };

  const onCalculate = () => {
    const result = validateFn(impressions, cpm, campaignCost);

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
  return (
    <div className={styles.formContainer}>
      <h3>CPM Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>

      {error && <Alert message={error} type="error" />}

      <div>
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
          <button onClick={onCalculate} className={styles.btn}>
            Calculate
          </button>
          <button className={styles.btn}>Clear</button>
        </div>

        <CalculateModal
          calculation={calculation}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default CalculatorForm;
