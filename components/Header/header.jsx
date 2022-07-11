import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "antd";
import { Collapse } from "antd";
import MenuOne from "./Menu/menuOne";
import MenuTwo from "./Menu/menuTwo";
import styles from "../../styles/Header.module.scss";
import { useState } from "react";

const { Panel } = Collapse;

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const onNavChange = (key) => {
    // console.log(key);
  };
  return (
    <header className={styles.header}>
      <div className="container groupTwo">
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <span>CPM</span> Calculators
            </a>
          </Link>
          <span className={styles.subLogo}>Powered by Adsparc</span>
        </div>
        <nav className={styles.navMob}>
          <div onClick={() => setToggleNav(!toggleNav)} className="nav-icon">
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656065276/CPM%20Calculators/nav_icon_pl11bj.svg"
              alt="Vercel Logo"
              width={26}
              height={26}
              priority={true}
            />

            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </div>
        </nav>

        {toggleNav && (
          <div className={styles.mobileCollapse}>
            <Collapse
              className={styles.collapseHead}
              onChange={onNavChange}
              expandIconPosition="end"
            >
              <Panel header="Calculators" key="1">
                <Link href="/">CPM Calcuator</Link>
                <Link href="/calculators/rpm-calculator/">RPM Calcuator</Link>
                <Link href="/calculators/ecpm-calculator/">eCPM Calcuator</Link>
                <Link href="/calculators/epmv-calculator/">EPMV Calcuator</Link>
              </Panel>
            </Collapse>

            <Collapse
              className={styles.collapseHead}
              onChange={onNavChange}
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

            <div className={styles.link}>Improve Revenue</div>
          </div>
        )}

        <nav className={styles.navDesk}>
          <div className={styles.links}>
            <Dropdown overlay={MenuOne} placement="bottom" arrow>
              <div className={styles.link}>
                Calculators{" "}
                <Image src="/navArrow.svg" alt="" width={10} height={10} />
              </div>
            </Dropdown>

            <Dropdown overlay={MenuTwo} placement="bottom" arrow>
              <div className={styles.link}>
                Ad Metrics{" "}
                <Image src="/navArrow.svg" alt="" width={10} height={10} />
              </div>
            </Dropdown>

            <div className={styles.link}>
              <Link href="/blog">Improve Revenue</Link>
            </div>
          </div>

          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
