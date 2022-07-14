import Image from "next/image";
import styles from "../../styles/AboutCPM.module.scss";

const AbouteCPM = () => {
  return (
    <section className={styles.aboutCPM}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.aboutText}>
            <h2>About eCPM</h2>

            <div className={styles.text}>
              The term eCPM can be defined as ‘effective cost per mille,’
              meaning how much an advertiser is willing to disburse or pay for
              an ad space per unit of thousands of ad impressions. The word
              ‘mille’ is Latin for thousand. eCPM is one of the most vital KPIs
              in digital advertising, as it indicates how beneficial specific ad
              spaces, websites, apps, and other dimensions are. With a complete
              understanding of eCPM, publishers can optimize their monetization
              strategies to 10X levels.
              <p>
                {" "}
                You have probably heard of CPM a zillion times, but what is
                eCPM, and why does it matter? Today, we explain what eCPM is,
                how eCPM is calculated, the significant difference between CPM
                vs eCPM, and how publishers can increase their eCPM with us!
              </p>
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
      </div>
    </section>
  );
};

export default AbouteCPM;
