import styles from "../../styles/FloatingCTA.module.scss";
import Button from "../Button/button";

const FloatingCTA = () => {
  return (
    <section className={styles.ctaContainer}>
      <div className="container">
        <Button text="Supercharge your CPMS" color="pink" />
      </div>
    </section>
  );
};

export default FloatingCTA;
