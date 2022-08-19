import styles from '../styles/Layout.module.scss';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Nextjs Homework</title>
            </Head>
            <header className={styles['wrapper__header']}>
                <div className={styles['wrapper__header__brand']}>
                    <h1 className={styles['wrapper__header__brand__title']}>
                        NEXTJS's HOMEWORK
                    </h1>
                </div>
                <nav className={styles['wrapper__header__navbar']}>
                    <ul className={styles['wrapper__header__navbar__list']}>
                        <li className={styles['wrapper__header__navbar__list__item']}>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={styles['wrapper__header__navbar__list__item']}>
                            <Link href='/covid-info'>
                                <a>Covid Info</a>
                            </Link>
                        </li>
                        <li className={styles['wrapper__header__navbar__list__item']}>
                            <Link href='/weather'>
                                <a>Weather</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={styles['wrapper__main']}>
                {children}
            </div>
        </div>
    );
};

export default Layout;