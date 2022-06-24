import Footer from "../Footer/footer";
import Header from "../Header/header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />

      <section className="page-content">{children}</section>

      <Footer />
    </main>
  );
};

export default Layout;
