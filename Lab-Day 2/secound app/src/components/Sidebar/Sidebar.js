import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <li className={styles.li}>One</li>
      <li className={styles.li}>Two</li>
      <li className={styles.li}>Three</li>
      <li className={styles.li}>Four</li>
      <li className={styles.li}>Five</li>
    </div>
  );
};

export default Sidebar;
