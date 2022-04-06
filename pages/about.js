import styles from "../styles/Home.module.css";
import Head from 'next/head'

const About = () => {
    return ( 
        <>
        <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content='ninjas'/>
        </Head>
        <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit, 
                voluptatem excepturi reiciendis laborum recusandae saepe quibusdam pariatur 
                ad asperiores. Ratione quod et reprehenderit in rerum praesentium voluptatibus 
                aspernatur repudiandae.
            </p>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit, 
                voluptatem excepturi reiciendis laborum recusandae saepe quibusdam pariatur 
                ad asperiores. Ratione quod et reprehenderit in rerum praesentium voluptatibus 
                aspernatur repudiandae.
            </p>
        </div>
        </>
    );
}
 
export default About;