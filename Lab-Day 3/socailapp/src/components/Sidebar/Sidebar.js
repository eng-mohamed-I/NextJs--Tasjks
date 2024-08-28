import styles from "./sidebar.module.css";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMore } from "react-icons/md";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <Link href={"/"} className={styles.li}>
        <span>
          <FaHouse />
        </span>
        &nbsp; Home
      </Link>
      <Link href={"/post"} className={styles.li}>
        <FaSearch /> &nbsp; Explore
      </Link>
      <li className={styles.li}>
        {" "}
        <FaBell />
        &nbsp; Notifications
      </li>
      <li className={styles.li}>
        <FaMessage />
        &nbsp; Messages
      </li>
      <li className={styles.li}>
        <FaUser /> &nbsp; Profile
      </li>
      <li className={styles.li}>
        {" "}
        <MdMore />
        &nbsp; More
      </li>
    </div>
  );
};

export default Sidebar;
