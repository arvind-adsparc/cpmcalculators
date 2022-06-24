import Image from "next/image";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container groupTwo">
        <div className={styles.logo}>
          <span>CPM</span> Calculators
        </div>
        <nav>
          <div className="nav-icon">
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656065276/CPM%20Calculators/nav_icon_pl11bj.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />

            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
