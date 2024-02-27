import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="">BotoStart </a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.fo}>
        <p>Developed by shaghayegh </p>
      </footer>
    </>
  );
}

export default Layout;
