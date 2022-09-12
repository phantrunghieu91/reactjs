import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import './bookManagement.scss';

const BookSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Should have > 2 characters!')
        .required('Required'),
    quantity: Yup.number()
        .required('Required')
});

export const BookManagement = () => {

    const [books, setBooks] = useState([]);

    const [book, setBook] = useState({
        title: '',
        quantity: ''
    });

    const resetForm = () => {
        setBook({
            title: '',
            quantity: ''
        });
    };

    const [indexSelected, setIndexSelected] = useState(null);

    const handleSelect = (index) => {
        setIndexSelected(index);
        setBook(books[index]);
    };

    const handleDelete = index => setBooks(books.filter((e, id) => id !== index));

    return (
        <div className="app">
            <header className='app__header'>
                <h1 className='app__header__title'>Library</h1>
            </header>
            <div className='app__content'>
                <Formik
                    enableReinitialize={true}
                    initialValues={book}
                    validationSchema={BookSchema}
                    onSubmit={(values, { resetForm }) => {
                        if(indexSelected === null) {
                            setBooks([...books, values]);
                            resetForm();
                        } else {
                            setBooks(books.map((ele, id) => {
                                if(id === indexSelected) ele = values;
                                return  ele;
                            }));
                            setIndexSelected(null);
                            setBook({
                                title: '',
                                quantity: ''
                            }); // Dùng setBook vì dùng resetForm bị bất đồng bộ ko reset dc form
                            // resetForm();
                        }
                        console.table(book);
                    }}
                >
                    {({errors, touched}) => (
                        <Form className='app__content__form'>
                            <div className='app__content__form__header'>
                                <h3 className='app__content__form__header__title'>{indexSelected === null ? 'Add new book' : `Edit ${books[indexSelected].title}`}</h3>
                            </div>
                            <div className='app__content__form__content'>
                                <div className='app__content__form__content__input-group'>
                                    <div className={`app__content__form__content__input-group__custom-input ${errors.title ? 'error' : ''}`}>
                                        <Field 
                                            className='app__content__form__content__input-group__custom-input__title'
                                            type='text'
                                            name='title'
                                            placeholder='Enter book title here..'
                                        />
                                        {errors.title && touched.title ? <p className='app__content__form__content__input-group__custom-input__error'>{errors.title}</p> : null}
                                    </div>
                                    <div className={`app__content__form__content__input-group__custom-input ${errors.quantity ? 'error' : ''}`}>
                                        <Field 
                                            className='app__content__form__content__input-group__custom-input__quantity'
                                            type='text'
                                            name='quantity'
                                            placeholder='Enter book quantity here..'

                                        />
                                        {errors.quantity && touched.quantity ? <p className='app__content__form__content__input-group__custom-input__error'>{errors.quantity}</p> : null}
                                    </div>
                                    </div>
                                    <div className='app__content__form__content__button-group'>
                                    <button
                                        type='submit'
                                        className='app__content__form__content__button-group__submit'
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className='app__content__form__content__button-group__reset'
                                        type='reset'
                                        onClick={resetForm}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='app__content__display-books'>
                    <div className='app__content__display-books__header'>
                        <h3 className='app__content__display-books__header__title'>Book in Library</h3>
                    </div>
                <div className='app__content__display-books__table-container'>
                    <table className='app__content__display-books__table-container__table'>
                        <thead>
                            <tr>
                            <th>Book Title</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            books.length > 0 && books.map((book, index) => {
                                return (
                                <tr 
                                    key={`book-${index}`}
                                    className='app__content__display-books__table-container__table__book'
                                >
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td className='app__content__display-books__table-container__table__book__button-group'>
                                        <button 
                                            onClick={()=>handleSelect(index)}
                                            className='app__content__display-books__table-container__table__book__button-group__edit'
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={()=>handleDelete(index)}
                                            className='app__content__display-books__table-container__table__book__button-group__delete'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
};