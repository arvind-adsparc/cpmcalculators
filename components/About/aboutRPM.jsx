import Image from "next/image";
import styles from "../../styles/AboutCPM.module.scss";

const AboutRPM = () => {
  return (
    <section className={styles.aboutCPM}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.aboutText}>
            <h2>About RPM</h2>

            <div className={styles.text}>
              RPM is one of the first abbreviations you will encounter when you
              enter the programmatic world. RPM simply means ‘revenue per
              mille,’ where ‘mille’ stands for 1,000. It is one of the most
              popular methods used by multiple online advertising platforms to
              determine the pay rate for a thousand ad impressions on a
              particular website. Using RPMs or revenue per mille as a metric to
              keep track of your earnings from advertising can offer publishers
              a goal to aim for.
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
          <h3>What is Page RPM?</h3>

          <div className={styles.text}>
            Performance and marketing metrics indicate the number of visitors
            and impressions, but how can these metrics estimate potential
            monetary outcomes? Knowing how much revenue-specific pages generate
            is crucial for a publisher. The reality is that the publisher may be
            looking at the incorrect metric. While website traffic and further
            advertiser-side metrics are fundamental, they cannot completely
            gauge if the business is rising or not – here comes the savior,
            ‘Page RPM.’
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRPM;
