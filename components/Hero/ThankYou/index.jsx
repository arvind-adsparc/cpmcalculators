import Image from "next/image";
import styles from "../../../styles/ThankYouHero.module.scss";

const ThankYouHero = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656913558/CPM%20Calculators/thank-you-image_hkzogv.svg"
          alt="Thank You"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>

      <h2>Thank you for your interest.</h2>
      <p>We will contact you soon.</p>
    </section>
  );
};

export default ThankYouHero;
