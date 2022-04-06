import styles from "../../styles/Home.module.css";
import Head from 'next/head'
import style from "../../styles/Ninjas.module.css";
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}

const Ninja = ({ninjas}) => {
    return ( 
        <>
        <Head>
        <title>Ninja List | All Ninja</title>
        <meta name="keywords" content='ninjas'/>
        </Head>
        <div>
            <h1 className={styles.title}>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <a className={style.single}>
                        <h3>Name:{ninja.name}</h3>
                        <h5>Email:{ninja.email}</h5>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Ninja;