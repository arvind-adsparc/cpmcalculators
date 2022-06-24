const Layout = ({ children }) => {
  return (
    <main>
      <header>Header content goes here</header>

      <section className="page-content">{children}</section>

      <footer>Footetr goes here</footer>
    </main>
  );
};

export default Layout;
