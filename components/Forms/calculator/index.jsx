import { useState } from "react";
import styles from "../../../styles/CalculatorForm.module.scss";
import Input from "../../Input/input";
import CalculateModal from "../../Modal/calculateModal";

const CalculatorForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.formContainer}>
      <h3>CPM Calculator</h3>
      <p>Complete two fields and we will calculate the third one for you</p>

      <div>
        <Input name="impressions" label="Impressions" type="text" />
        <Input name="cpm" label="CPM($)" type="text" />
        <Input name="cost" label="Campaign Cost($)" type="text" />

        <div className={styles.ctas}>
          <button
            onClick={() => {
              console.log("getting this far");
              setOpenModal(true);
            }}
            className={styles.btn}
          >
            Calculate
          </button>
          <button className={styles.btn}>Clear</button>
        </div>

        <CalculateModal openModal={openModal} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default CalculatorForm;
