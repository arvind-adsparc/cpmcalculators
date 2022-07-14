import Link from "next/link";
import Image from "next/image";
import { Collapse } from "antd";
import styles from "../../styles/Footer.module.scss";

const { Panel } = Collapse;

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

            <span className={styles.subLogo}>
              Powered by Adsparc{" "}
              <Image src="/adsparcPow.svg" alt="" width={15} height={15} />
            </span>
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
            <div className={styles.link}>
              <a href="mailto:pubgrowth@adsparc.com" data-nosnippet>
                pubgrowth@adsparc.com
              </a>
            </div>
            <div className={styles.link}>
              <a
                href="https://adsparc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.adsparc.com
              </a>
            </div>
          </div>

          <div className={styles.quickLinks}>
            <div className={styles.linkHead}>Quick Links</div>

            <div className={styles.grid}>
              <Collapse
                className={styles.collapseHead}
                onChange={() => {}}
                expandIconPosition="end"
              >
                <Panel header="Calculators" key="1">
                  <Link href="/">CPM Calcuator</Link>
                  <Link href="/calculators/rpm-calculator/">RPM Calcuator</Link>
                  <Link href="/calculators/ecpm-calculator/">
                    eCPM Calcuator
                  </Link>
                  <Link href="/calculators/epmv-calculator/">
                    EPMV Calcuator
                  </Link>
                </Panel>
              </Collapse>

              <Collapse
                className={styles.collapseHead}
                onChange={() => {}}
                expandIconPosition="end"
              >
                <Panel header="Ad Metrics" key="2">
                  <Link href="/ad-metrics/cost-per-click/">
                    Cost Per Click (CPC)
                  </Link>
                  <Link href="/ad-metrics/cost-per-mile/">
                    Cost Per Mile(CPM)
                  </Link>
                  <Link href="/ad-metrics/ad-viewability/">Ad Viewability</Link>
                  <Link href="/ad-metrics/ad-impressions/">Ad Impressions</Link>
                  <Link href="/ad-metrics/page-rpm/">Page RPM</Link>
                  <Link href="/ad-metrics/ecpm/">eCPM</Link>
                  <Link href="/ad-metrics/epmv/">EPMV</Link>
                </Panel>
              </Collapse>
              <div className={styles.link}>
                <Link href="/blog">Improve Revenue</Link>
              </div>
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
