import {useState} from 'react';
import './App.scss';

function App() {
  const [form, setForm] = useState({
    email: {value: '', error: ''},
    password: {value: '', error: ''}
  });

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:  /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/
  };

  const ERROR_MESSAGE = {
    email: 'Wrong email',
    password: 'Wrong password!'
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    let error = REGEX[inputName].test(inputValue) ? '' : ERROR_MESSAGE[inputName];

    setForm({
      ...form, [inputName]: {value: inputValue, error: error}
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFilled = form.email && form.email.value && form.password && form.password.value;
    const isError = isFilled && (form.email.error || form.password.error);

    alert(isFilled && !isError ? `Sign in success! info ${JSON.stringify(form, null, 2)}` : 'Please fill all empty field');
  };

  return (
    <div className="app">
      <form className='app__form' onSubmit={handleSubmit}>
        <div className='app__form__header'>
          <h1 className='app__form__header__title'>Validate Login Form</h1>
        </div>
        <div className='app__form__content'>
          <div className={`app__form__content__input-group ${form.email && form.email.error && 'error'}`}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'
              onChange={handleChange} value={(form.email && form.email.value) || ''}
              className='app__form__content__input-group__email'/>
              {form.email && form.email.error && (<p className='app__form__content__input-group__error'>{form.email.error}</p>)}
          </div>
          <div className={`app__form__content__input-group ${form.password && form.password.error && 'error'}`}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password'
              onChange={handleChange} value={(form.password && form.password.value) || ''}
              className='app__form__content__input-group__password'/>
              {form.password && form.password.error && (<p className='app__form__content__input-group__error'>{form.password.error}</p>)}
          </div>
          <button className='app__form__content__submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
