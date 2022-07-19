import { useState } from "react";

import Image from "next/image";
import {
  cpmFormSchema,
  rpmFormSchema,
  eCPMFormSchema,
  epmvFormSchema,
} from "./schema";
import CalculatorForm from "../Forms/calculator";
import styles from "../../styles/HeroHome.module.scss";
import GetStartedModal from "../Modal/getStartedModal";

const DefaultHome = ({ name, heroImage }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalFn = (value) => {
    setOpenModal(value);
  };
  const formTemplate = () => {
    switch (name) {
      case "CPM":
        return <CalculatorForm name={name} formContent={cpmFormSchema} />;
      case "RPM":
        return <CalculatorForm name={name} formContent={rpmFormSchema} />;
      case "eCPM":
        return <CalculatorForm name={name} formContent={eCPMFormSchema} />;
      case "eCPM":
        return <CalculatorForm name={name} formContent={eCPMFormSchema} />;
      default:
        return <CalculatorForm name={name} formContent={epmvFormSchema} />;
    }
  };

  return (
    <section className={styles.heroContainer}>
      <div className="container">
        <div className={styles.innerContainer}>
          <div className={styles.group}>
            <div>
              <h1 className={styles.title}>
                <span className={styles.lineDeco}> Calculate your {name}</span>{" "}
                <span className={styles.lineBreak}></span>{" "}
                <span className={styles.lineDeco}>
                  Stay on top of monetization.{" "}
                </span>
              </h1>
              {/* <CalculatorForm name={name} /> */}

              {formTemplate()}
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={
                  heroImage
                    ? heroImage
                    : "https://res.cloudinary.com/dqove2qhg/image/upload/v1656426401/CPM%20Calculators/hero-image_ndouct.svg"
                }
                alt="CPM Calculators"
                width={400}
                height={400}
                layout="responsive"
                priority
              />

              <div className={styles.ctaAction}>
                <h3>Ready to increase your ad revenue by 30%?</h3>

                <button onClick={() => setOpenModal(true)}>
                  Get Free Revenue Estimate
                </button>

                <GetStartedModal
                  openModal={openModal}
                  closeModal={closeModalFn}
                />
              </div>
            </div>
          </div>

          <div className={styles.circleSmall}></div>
          <div className={styles.circleBig}></div>
        </div>
      </div>
    </section>
  );
};

export default DefaultHome;
