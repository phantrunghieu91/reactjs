import Link from 'next/link';
import Head from 'next/head';
import css from '../styles/Layout.module.css';

export default function Layout({ title, children }) {
    return (
        <div className={css.container}>
            <Head>
                <title>{title === undefined ? `Exercises of Client API` : title}</title>
            </Head>
            <div className={css.header}>
                <nav className={css.navbar}>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/todos'>
                                <a>Exercise 1 (Todolist)</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/books'>
                                <a>Exercise 2 (Library)</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contacts'>
                                <a>Exercise 3 (Contacts)</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/users'>
                                <a>Exercise 4 (Users and Articles)</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={css.content}>
                {children}
            </div>
        </div>
    );
}