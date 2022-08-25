import Layout from '../Layout.js';
import css from '../../styles/contact/ContactLayout.module.css';

const ContactLayout = ({isCreateNew, title, children, handleAddNew, contactName}) => {

    let header;
    if(title === 'Contacts') {
        header = <header className={css[`container__header`]}>
            <h1>Contacts</h1>
            <button onClick={handleAddNew} className={css[`container__header__addNewBtn`]}>Add new contact</button>
        </header>
    } else {
        header = <header className={css[`container__header`]}>
            <h1>{isCreateNew ? 'Add new contact' : `Edit contact of '${contactName}'`}</h1>
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

export default ContactLayout;