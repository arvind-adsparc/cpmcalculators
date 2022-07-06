import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "antd";
import MenuOne from "./Menu/menuOne";
import MenuTwo from "./Menu/menuTwo";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container groupTwo">
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <span>CPM</span> Calculators
            </a>
          </Link>
        </div>
        <nav className={styles.navMob}>
          <div className="nav-icon">
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
