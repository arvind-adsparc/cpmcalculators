import Image from "next/image";
import styles from "../../styles/AboutCPM.module.scss";

const About = () => {
  return (
    <section className={styles.aboutCPM}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.aboutText}>
            <h2>About CPM</h2>

            <div className={styles.text}>
              An accurate calculation of CPM (Cost Per Mille) can help you
              recognize which ads are performing well, which ads aren’t, and how
              you can improve the outcomes. CPM has acted as an industry
              standard that determines web ads’ advertising costs and pricing.
              CPM endures as a vital metric for publishers! CPM calculation is
              simple – take the total cost paid in CPM campaigns and then
              multiply the total impressions by the CPM rate and then divide it
              by one thousand. We will help you identify whether your CPM is
              above or below industry standards. Click here to learn more.
            </div>
          </div>

          <div className={styles.imageDiv}>
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656070927/CPM%20Calculators/aboutCPM_zuwktl.svg"
              alt=""
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>

        <div className={styles.whatIsCPM}>
          <h3>What is CPM?</h3>

          <div className={styles.text}>
            CPM is one of the most significant advertising metrics. CPM means
            cost per mille, i.e. the cost per thousand impressions. Simply it
            means the cost of having an ad published, seen a thousand times on a
            particular website, and is used to inspect and oversee ad
            performance. Since early online marketing campaigns, CPM has acted
            as an industry standard that determines web ads’ advertising costs
            and pricing. CPM calculation is simple – take the total cost paid in
            CPM campaigns and then multiply the total impressions by the CPM
            rate and then divide it by one thousand. For example, one million
            impressions at 1 $ CPM equals $1000 in gross revenue.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
