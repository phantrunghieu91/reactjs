import css from './Header.module.css';
import Link from 'next/link';

export default function Header(props) {
    return (
        <header className={css.container}>
            <nav className={css.navbar}>
                <ul className={css.navbarMenu}>
                    <li className={css.navItem}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={css.navItem}>
                        <Link href='/sign-in'>Sign in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}