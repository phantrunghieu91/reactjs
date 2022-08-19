import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';


export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Nextjs Demo</title>
            </Head>
            <header className={styles.header}>
                <h1 className={styles.currentPage}>Demo</h1>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/signin'>
                                <a>Signin</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}