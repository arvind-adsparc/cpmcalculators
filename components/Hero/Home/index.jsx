import Image from "next/image";

import CalculatorForm from "../../Forms/calculator";
import styles from "../../../styles/HeroHome.module.scss";

const HeroHome = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="container">
        <div className={styles.innerContainer}>
          <div className={styles.group}>
            <div>
              <h1 className={styles.title}>
                Calculate <span className={styles.lineDeco}>your CPM</span>{" "}
                <span className={styles.lineBreak}></span> Stay on{" "}
                <span className={styles.lineDeco}> top of monetization.</span>
              </h1>
              <CalculatorForm />
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656426401/CPM%20Calculators/hero-image_ndouct.svg"
                alt="CPM Calculators"
                width={400}
                height={400}
                layout="responsive"
                priority
              />

              <div className={styles.ctaAction}>
                <h3>Do you want to increase your current revenue by 30%?</h3>

                <button>Get Started</button>
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

export default HeroHome;
