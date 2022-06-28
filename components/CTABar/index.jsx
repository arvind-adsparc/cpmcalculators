import styles from "../../styles/CTABar.module.scss";
import Button from "../Button/button";

const CTABar = ({ text, btnText, btnColor }) => {
  return (
    <section className={styles.ctaBar}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>{text}</div>

          <Button text={btnText} color={btnColor} />
        </div>
      </div>
    </section>
  );
};

export default CTABar;
