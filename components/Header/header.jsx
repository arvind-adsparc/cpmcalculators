import Image from "next/image";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container groupTwo">
        <div className={styles.logo}>
          <span>CPM</span> Calculators
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
            <div className={styles.link}>
              <div>Calculators</div>
              <Image src="/navArrow.svg" alt="" width={10} height={10} />
            </div>
            <div className={styles.link}>
              <div>Ad Metrics</div>
              <Image src="/navArrow.svg" alt="" width={10} height={10} />
            </div>
            <div className={styles.link}>Improve Revenue</div>
          </div>

          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
