import styles from "../../styles/CTABar.module.scss";
import Button from "../Button/button";

const CTABar = () => {
  return (
    <section className={styles.ctaBar}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            AdSparc’s Result-driven Approach and Cross Channel Monetization
            Solution empower you with Better User Engagement & Amplified Revenue
            Generation.
          </div>

          <Button text="Get Started" color="pink" />
        </div>
      </div>
    </section>
  );
};

export default CTABar;
