import styles from "../../styles/CTABar.module.scss";

const CTABar = ({ text, btnText, btnColor }) => {
  return (
    <section className={styles.ctaBar}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>{text}</div>

          <div className={styles.cta}>
            <button className={styles.btn}>{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABar;
