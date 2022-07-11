import { useState } from "react";
import styles from "../../styles/CTABar.module.scss";
import GetStartedModal from "../Modal/getStartedModal";

const CTABar = ({ text, btnText }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalFn = (value) => {
    setOpenModal(value);
  };
  return (
    <section className={styles.ctaBar}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>{text}</div>

          <div className={styles.cta}>
            <button onClick={() => setOpenModal(true)} className={styles.btn}>
              {btnText}
            </button>

            <GetStartedModal openModal={openModal} closeModal={closeModalFn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABar;
