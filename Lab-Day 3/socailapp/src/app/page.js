import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/static/pngegg.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div></div>
      </div>
    </main>
  );
}
