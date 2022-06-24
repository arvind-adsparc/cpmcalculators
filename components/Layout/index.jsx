import Header from "../Header/header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />

      <section className="page-content">{children}</section>

      <footer>Footetr goes here</footer>
    </main>
  );
};

export default Layout;
