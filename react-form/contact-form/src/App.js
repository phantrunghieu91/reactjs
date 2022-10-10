import React, {useState} from 'react';
import {Formik} from 'formik';
import './App.scss';

function App() {
  const [form, setForm] = useState({});

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^([0-9]){10,11}$/
  };

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleValidate = () => {
    const errors = {};
    if(!form.name) {
      errors.name = 'Required';
    } 
    if(!form.email) {
      errors.email = 'Required';
    }else if(!REGEX.email.test(form.email)){
      errors.email = 'Invalid email address';
    }
    if(!form.phone) {
      errors.phone = 'Required';
    }else if(!REGEX.phone.test(form.phone)){
      errors.phone = 'Invalid phone number';
    }
    if(!form.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const handleSubmit = () => {
    // e.preventDefault();
    alert('Success sent message!');
    // alert(JSON.stringify(values, null, 2));
    console.table(form);
  };

  return (
    <div className="app">
      <div className='app__header'>
        <h1 className='app__header__title'>Contact Form</h1>
      </div>
      <div className='app__content'>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {( {errors, handleSubmit} ) => (
            <form 
              className='app__content__form'
              onSubmit={handleSubmit}
            >
              <div className={`app__content__form__input-group ${errors.name ? 'error' : ''}`}>
                <label htmlFor='name'>Name</label>
                <input 
                  className='app__content__form__input-group__name'
                  type='text'
                  id='name' name='name' placeholder='Enter name here'
                  value={form.name || ''} 
                  onChange={handleChange}
                />
                {<p className='app__content__form__input-group__error'>{errors.name}</p>}
              </div>
              <div className={`app__content__form__input-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor='email'>Email</label>
                <input 
                  className='app__content__form__input-group__email'
                  type='text'
                  id='email' name='email' placeholder='Enter email here'
                  value={form.email || ''} 
                  onChange={handleChange}
                />
                {<p className='app__content__form__input-group__error'>{errors.email}</p>}
              </div>
              <div className={`app__content__form__input-group ${errors.phone ? 'error' : ''}`}>
                <label htmlFor='phone'>Phone</label>
                <input 
                  className='app__content__form__input-group__phone'
                  type='text'
                  id='phone' name='phone' placeholder='Enter phone here'
                  value={form.phone || ''}
                  onChange={handleChange}
                />
                {<p className='app__content__form__input-group__error'>{errors.phone}</p>}
              </div>
              <div className={`app__content__form__input-group ${errors.message ? 'error' : ''}`}>
                <label htmlFor='message'>Message</label>
                <textarea 
                  className='app__content__form__input-group__message'
                  id='message' name='message' placeholder='Enter message here'
                  value={form.message || ''}
                  onChange={handleChange}
                />
                <p className='app__content__form__input-group__error'>{errors.message}</p>
              </div>
              <button className='app__content__form__submit' type='submit'>Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
