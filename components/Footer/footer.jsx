import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="aboutCPM">
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <span>CPM</span> Calculators
              </a>
            </Link>
          </div>

          <div className={styles.about}>
            Designed explicitly for programmatic media planners and ad ops teams
            for their media planning and optimization. Get granular reporting,
            AI-driven data, partner-specific estimation of programmatic
            technology, and inventory costs instantly. With us, make your every
            impression count!
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <div className={styles.link}>pubdev@adsparc.com</div>
            <div className={styles.link}>www.adsparc.com</div>
          </div>

          <div className={styles.quickLinks}>
            <div className={styles.linkHead}>Quick Links</div>

            <div className={styles.grid}>
              <div className={styles.link}>Calculator</div>
              <div className={styles.link}>Ad Metrics</div>
              <div className={styles.link}>
                <Link href="/blog">Improve Revenue</Link>
              </div>
              <div className={styles.link}>About Us</div>
              <div className={styles.link}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        2022 © All rights reserved by Adsparc.com
      </div>
    </footer>
  );
};

export default Footer;
