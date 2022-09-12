import { useState } from 'react';
import { Formik } from 'formik';
import './App.scss';

function App() {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({});

  const [indexSelected, setIndexSelected] = useState(null);

  const handleSelect = (index, book) => {
    setIndexSelected(index);
    setBook(book);
  };

  const handleDelete = index => setBooks(books.filter((e, id) => id !== index));

  const handleChange = e => setBook({...book, [e.target.name]: e.target.value});

  const handleSubmit = () => {
    console.log('Submitting');
    // e.preventDefault();
    if(indexSelected === null){
      console.log(book);
      setBooks([...books, book]);
    } else {
      setBooks(books.map((ele, id) => {
        if(id === indexSelected) ele = book;
        return ele;
      }));
      setIndexSelected(null);
    }
    setBook({});
    console.table(books);
    console.log('submitted!');
  };

  const handleReset = () => {
    setBook({
      title: '',
      quantity: ''
    });
    setIndexSelected(null);
  };

  const handleValidate = () => {
    console.log('Validating...');
    const errors = {};
    
    if(!book.title) errors.title = 'Required';

    if(!book.quantity) errors.quantity = 'Required';
    else if(!(/^([0-9]+)$/.test(book.quantity))) errors.quantity = 'Number only';

    if(errors !== undefined) console.table(errors);
    return errors;
  };

  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__header__title'>Library</h1>
      </header>
      <div className='app__content'>
        <Formik
          initialValues={book}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({errors, handleSubmit}) => (
            <form className='app__content__form' onSubmit={handleSubmit}>
              <div className='app__content__form__header'>
                <h3 className='app__content__form__header__title'>{indexSelected === null ? 'Add new book' : `Edit ${books[indexSelected].title}`}</h3>
              </div>
              <div className='app__content__form__content'>
                <div className='app__content__form__content__input-group'>
                  <div className={`app__content__form__content__input-group__custom-input ${errors.title ? 'error' : ''}`}>
                    <input 
                      className='app__content__form__content__input-group__custom-input__title'
                      type='text'
                      name='title'
                      value={book.title || ''}
                      onChange={handleChange}
                      placeholder='Enter book title here..'
                    />
                    <p className='app__content__form__content__input-group__custom-input__error'>{errors.title}</p>
                  </div>
                  <div className={`app__content__form__content__input-group__custom-input ${errors.quantity ? 'error' : ''}`}>
                    <input 
                      className='app__content__form__content__input-group__custom-input__quantity'
                      type='text'
                      name='quantity'
                      value={book.quantity || ''}
                      onChange={handleChange}
                      placeholder='Enter book quantity here..'
                    />
                    <p className='app__content__form__content__input-group__custom-input__error'>{errors.quantity}</p>
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
                    onReset={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
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
                            onClick={()=>handleSelect(index, book)}
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
  );
}

export default App;
