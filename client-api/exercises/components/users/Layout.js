import Layout from "../Layout";
import css from '../../styles/user/Layout.module.css';

export default function UserLayout({title, children, isCreateNew, userName, handleAddNew}) {
    let header;
    if(title === 'Users Management') {
        header = <header className={css[`container__header`]}>
            <h1>Users</h1>
            <button 
                onClick={handleAddNew} 
                className={css[`container__header__addNewBtn`]}
            >Add new user</button>
        </header>
    } else {
        header = <header className={css[`container__header`]}>
            <h1>{isCreateNew ? 'Add new user' : `Edit user '${userName}'`}</h1>
        </header>
    }

    return (
        <Layout title={title}>
            <div className={css.container}>
                {header}
                <main className={css[`container__content`]}>
                    {children}
                </main>
            </div>
        </Layout>
    );
}