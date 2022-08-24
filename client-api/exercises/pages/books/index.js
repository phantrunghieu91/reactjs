import css from '../../styles/library/Books.module.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import BookLayout from "../../components/library/Layout";
import { useRouter } from 'next/router';

export default function Books() {
    const client = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books'
    });

    const router = useRouter();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, []);

    const getBooks = async () => {
        return await client.get();
    };

    const deleteBook = (id) => {
        client
            .delete(`/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                setBooks(books.filter(book => book.id !== id));
            });
    };

    return (
        <BookLayout title='Library'>
            <header className={css['header']}>
                <h1>Library</h1>
                <button className={css['header__addNewBookBtn']}
                    onClick={() => router.push(`/books/0`)}
                >
                    Add new book
                </button>
            </header>
            <main className={css['content']}>
                <table className={css['displayBooks']}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => (
                                <tr key = {`book-${index}`}
                                    className={css[`displayBooks__book`]}
                                >
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td className={css[`displayBooks__book__btn-grp`]}>
                                        <button 
                                            className={css[`displayBooks__book__btn-grp__edit-btn`]}
                                            onClick={() => router.push(`/books/${book.id}`)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className={css[`displayBooks__book__btn-grp__delete-btn`]}
                                            onClick={() => deleteBook(book.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </BookLayout>
    );
};