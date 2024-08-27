import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <li className={styles.li}>one</li>
      <li className={styles.li}>two</li>
      <li className={styles.li}>three</li>
      <li className={styles.li}>four</li>
      <li className={styles.li}>five</li>
    </div>
  );
};

export default Sidebar;
