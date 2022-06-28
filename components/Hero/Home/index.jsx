import styles from "../../../styles/HeroHome.module.scss";
import CalculatorForm from "../../Forms/calculator";

const HeroHome = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="container">
        <div>
          <h1 className={styles.title}>
            Calculate <span className={styles.lineDeco}>your CPM</span>{" "}
            <span className={styles.lineBreak}></span> Stay on{" "}
            <span className={styles.lineDeco}> top of monetization.</span>
          </h1>
        </div>

        <div>
          <CalculatorForm />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
