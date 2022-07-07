import Image from "next/image";
import styles from "../../styles/AboutCPM.module.scss";

const AbouteEPMV = () => {
  return (
    <section className={styles.aboutCPM}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.aboutText}>
            <h2>About EPMV</h2>

            <div className={styles.text}>
              <p>
                EPMV or ‘Earnings per Thousand Visitors’ is also known as
                session RPM or session revenue.
              </p>

              <p>
                EPMV is used to gauge the total revenue generated on a site for
                thousands of visitors, comprising earnings from multiple ad
                networks, exchanges, and SSPs. Likewise, EPMV is calculated for
                the whole site. It offers a panoramic view of the publisher’s
                earnings.
              </p>

              <p>
                Now let’s look at how to calculate EPMV? EPMV = (Total revenue
                generated) *1000 / (Total website visitors).
              </p>

              <p>
                Currently, there are a plethora of metrics available in the
                monetizing world allowing you to calculate ad revenue. However,
                the ad tech industry is always adding more to improve its
                understanding of publisher earnings based on profit factors like
                page views, sessions, and users. Today let’s discuss one such
                trending ad metric that is helping the publishers to achieve a
                holistic view of their earnings – EPMV. ‘What is EPMV’ and how
                you can calculate it?
              </p>
            </div>
          </div>

          <div className={styles.imageDiv}>
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656070927/CPM%20Calculators/aboutCPM_zuwktl.svg"
              alt="Vercel Logo"
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

export default AbouteEPMV;
