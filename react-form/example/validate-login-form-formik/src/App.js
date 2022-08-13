import {useState} from 'react';
import './App.scss';
import {Formik} from 'formik';

function App() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleValidate = () => {
    console.log('validating...');
    const errors = {
      email: '',
      password: ''
    };
    if(!form.email){
      errors.email = 'Required';
    } else if(!REGEX.email.test(form.email)){
      errors.email = 'Invalid email';
    }

    if(!form.password){
      errors.password = 'Required';
    } 

    console.log(errors);
    return errors;
  };

  const handleSubmit = () => {
    alert(`Sign in success! info ${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="app">
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}>
          {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='app__form'>
            <div className='app__form__header'>
              <h1 className='app__form__header__title'>Validate Login Form</h1>
            </div>
            <div className='app__form__content'>
              <div className={`app__form__content__input-group ${
                  errors.email ? 'error' : ''
                }`}>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email'
                  onChange={handleChange} value={form.email || ''}
                  className='app__form__content__input-group__email'/>
                  <p className='app__form__content__input-group__error'>{errors.email}</p>
              </div>
              <div className={`app__form__content__input-group ${
                  errors.password ? 'error' : ''
                }`}>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password'
                  onChange={handleChange} value={(form.password ) || ''}
                  className='app__form__content__input-group__password'/>
                  <p className='app__form__content__input-group__error'>{errors.password}</p>
              </div>
              <button className='app__form__content__submit' type='submit'>Login</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
