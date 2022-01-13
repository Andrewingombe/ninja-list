import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quo.
          Dicta voluptate ab quas quia provident nam repellendus enim. Itaque
          distinctio ipsam eos magni atque consequuntur nostrum, totam
          blanditiis cupiditate minima accusamus officia harum error quisquam
          adipisci! Corporis placeat ut odit sequi error quaerat. Consequuntur
          vel velit molestiae itaque sunt.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quo.
          Dicta voluptate ab quas quia provident nam repellendus enim. Itaque
          distinctio ipsam eos magni atque consequuntur nostrum, totam
          blanditiis cupiditate minima accusamus officia harum error quisquam
          adipisci! Corporis placeat ut odit sequi error quaerat. Consequuntur
          vel velit molestiae itaque sunt.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja listing</a>
        </Link>
      </div>
    </div>
  );
}
