import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          {" "}
          <span>CPM</span> Calculators
        </div>
        <nav></nav>
      </div>
    </header>
  );
};

export default Header;
