import Layout from "../Layout";
import css from '../../styles/library/BookLayout.module.css';

const BookLayout = ({title, children}) => (
    <Layout title={title}>
        <div className={css.container}>
            {children}
        </div>
    </Layout>
);

export default BookLayout;