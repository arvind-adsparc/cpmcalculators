import FloatingCTA from "../FloatingCTA";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section className="page-content">{children}</section>
      <Footer />
      {/* <FloatingCTA /> */}
    </main>
  );
};

export default Layout;
