import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import BookLayout from '../../components/library/Layout';
import axios from 'axios';
import css from "../../styles/library/BookDetail.module.css";
import InputGroup from '../../components/library/InputGroup';

export default function BookDetails(){
    const client = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books'
    });

    const router = useRouter();
    const {bookid} = router.query;

    const isAddNew = bookid === '0';

    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    const [book, setBook] = useState({});

    const [errors, setErrors] = useState({});

    !isAddNew && useEffect(() => {
        if(isObjectEmpty(book))
            getBookDetails()
                .then(res => {
                    setBook(res.data)
                })
                .catch(err => {
                    throw err;
                });
    }, [book]);

    const getBookDetails = async () => {
        return await client.get(`/${bookid}`);
    };

    const handleChange = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if(inputName === 'quantity') {
            if(!book.quantity){
                setErrors({...errors, [inputName]: 'Required'});
            } else {
                setErrors({...errors, [inputName]: /[0-9]{1,}/.test(inputValue) ? '' : 'Only number!'});
            }
        } else setErrors({...errors, [inputName]: /[A-Za-z0-9\s]{1,}/.test(inputValue) ? '' : 'Required'});

        setBook({...book, [inputName]: inputValue});
    };

    const handleSubmit = e => {
        e.preventDefault();

        const isFilled = book.title && book.quantity;
        const isError = isFilled && (errors.title || errors.quantity);

        if(isError || !isFilled) {
            alert(`Please fill out empty textbox!`);
        } else {
            if(isAddNew) {
                client
                    .post('', book)
                    .then(res => {
                        alert(`Successful create new book: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            } else {
                client
                    .put(`/${bookid}`, book)
                    .then(res => {
                        alert(`Successful edit book: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            }
            setTimeout(() => {router.push('/books')}, 2000);
        }

    };

    return (
        <BookLayout title='Book details'>
            <div className={css.container}>
                <header className={css['container__header']}>
                    <h1>{isAddNew ? `Add a New Book` : `Edit '${book.title}'`}</h1>
                </header>
                <form className={css[`container__form`]}
                    onSubmit={handleSubmit}
                >
                    <InputGroup 
                        id='title'
                        label='Title'
                        name='title'
                        value={book.title || ''}
                        onChange={handleChange}
                        error={errors.title}
                    />
                    <InputGroup 
                        id='quantity'
                        label='Quantity'
                        name='quantity'
                        value={book.quantity || ''}
                        onChange={handleChange}
                        error={errors.quantity}
                    />
                    <button type='submit'>{isAddNew ? 'Add' : 'Save'}</button>
                </form>
            </div>
        </BookLayout>
    );
}