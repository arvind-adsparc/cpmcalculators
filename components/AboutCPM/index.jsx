import Image from "next/image";
import styles from "../../styles/AboutCPM.module.scss";

const AboutCPM = () => {
  return (
    <section className={styles.aboutCPM}>
      <div className="container">
        <h2>About CPM</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            An accurate calculation of CPM (Cost Per Mille) can help you
            recognize which ads are performing well, which ads aren’t, and how
            you can improve the outcomes. CPM has acted as an industry standard
            that determines web ads’ advertising costs and pricing. CPM endures
            as a vital metric for publishers! CPM calculation is simple – take
            the total cost paid in CPM campaigns and then multiply the total
            impressions by the CPM rate and then divide it by one thousand. We
            will help you identify whether your CPM is above or below industry
            standards. Click here to learn more.
          </div>

          <div className={styles.imageDiv}>
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656070927/CPM%20Calculators/aboutCPM_zuwktl.svg"
              alt="Vercel Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCPM;
