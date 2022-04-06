import Link from 'next/link';
import Head from 'next/head'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content='ninjas'/>
    </Head>
    <div>
      <h3 className={styles.title}>Homepage</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        impedit, voluptatem excepturi reiciendis laborum recusandae saepe
        quibusdam pariatur ad asperiores. Ratione quod et reprehenderit in rerum
        praesentium voluptatibus aspernatur repudiandae.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        impedit, voluptatem excepturi reiciendis laborum recusandae saepe
        quibusdam pariatur ad asperiores. Ratione quod et reprehenderit in rerum
        praesentium voluptatibus aspernatur repudiandae.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
