import css from './MainLayout.module.css';
import Head from 'next/head';
import Header from '../Header/Header';

export default function MainLayout({title, children}) {
    return (
        <div className={css.container}>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main className={css.content}>
                {children}
            </main>
        </div>
    );
}