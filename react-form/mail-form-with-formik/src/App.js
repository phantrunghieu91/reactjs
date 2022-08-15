import {Formik} from 'formik';
import { useState } from 'react';
import './App.scss';

function App() {
  document.title = `Contact form`;
  const [form, setForm] = useState({});

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const handleSubmit = () => {
    alert(`Success sent! ${JSON.stringify(form, null, 2)}`);
  };

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleValidate = () => {
    const errors = {};

    if(!form.email) errors.email = 'Required';
    else if(!REGEX.email.test(form.email)) errors.email = 'Invalid email address';

    if(!form.title) errors.title = 'Required';

    if(!form.message) errors.message = 'Required';

    return errors;
  };

  return (
    <div className="app">
      <div className='app__header'>
        <h1 className='app__header__title'>Contact form</h1>
      </div>
      <div className='app__content'>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({errors, handleSubmit}) => (
            <form
              className='app__content__form'
              onSubmit={handleSubmit}
            >
              <div className={`app__content__form__input-group ${errors.email ? 'error' : ''}`}>
                <label for='email'>To</label>
                <input 
                  className='app__content__form__input-group__email'
                  type='text'
                  id='email'
                  name='email'
                  value={form.email || ''}
                  onChange={handleChange}
                />
                <p className='app__content__form__input-group__error'>{errors.email}</p>
              </div>
              <div className={`app__content__form__input-group ${errors.title ? 'error' : ''}`}>
                <label for='title'>Title</label>
                <input 
                  className='app__content__form__input-group__title'
                  type='text'
                  id='title'
                  name='title'
                  value={form.title || ''}
                  onChange={handleChange}
                />
                <p className='app__content__form__input-group__error'>{errors.title}</p>
              </div>
              <div className={`app__content__form__input-group ${errors.message ? 'error' : ''}`}>
                <label for='message'>Message</label>
                <textarea 
                  className='app__content__form__input-group__title'
                  id='message'
                  name='message'
                  rows='5'
                  value={form.message || ''}
                  onChange={handleChange}
                />
                <p className='app__content__form__input-group__error'>{errors.message}</p>
              </div>
              <div className={`app__content__form__input-group`}>
                <input 
                  className='app__content__form__input-group__file'
                  type='file'
                  id='file'
                  name='file'
                />
              </div>
              <div className='app__content__form__button-group'>
                <button 
                  className='app__content__form__button-group__submit'
                  type='submit'
                >Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
