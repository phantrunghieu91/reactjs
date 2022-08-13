import {useState} from 'react';
import './App.scss';

function App() {
  const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Password must be the same"
  };

  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
    confirmPassword: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  };

  const [user, setUser] = useState({
    username: {value: '', error: ''},
    email: {value: '', error: ''},
    password: {value: '', error: ''},
    confirmPassword: {value: '', error: ''}
  });

  const handleChange = (e) => {
    let error = "";
    if(e.target.name === 'password'){
      if(user.confirmPassword && user.confirmPassword.value)
        error = e.target.value === user.confirmPassword.value ? '' : MESSAGE_ERROR[e.target.name];
      else 
        error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name];
    } else if(e.target.name === 'confirmPassword'){
      if(user.password && user.password.value)
        error = e.target.value === user.password.value ? '' : MESSAGE_ERROR[e.target.name];
      else 
        error = REGEX[e.target.name].test(e.target.value) ? '' : MESSAGE_ERROR[e.target.name];
    } else 
      error = REGEX[e.target.name].test(e.target.value) ? "" : MESSAGE_ERROR[e.target.name];
      
    setUser({...user, [e.target.name]: {value: e.target.value, error}});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFilled =
      user.username &&
      user.username.value &&
      user.email &&
      user.email.value &&
      user.password &&
      user.password.value &&
      user.confirmPassword &&
      user.confirmPassword.value;
    const isError =
      isFilled &&
      (user.username.error ||
        user.email.error ||
        user.password.error ||
        user.confirmPassword.error);
    alert(isFilled && !isError ? `Sign up success! ${JSON.stringify(user, null, 2)}` : 'Please fill out all fields!');
  };

  return (
    <div className='app'>
      <form className='app__form' onSubmit={handleSubmit}>
        <div className='app__form__header'>
          <h1>Basic Register Form</h1>
        </div>
        <div className='app__form__content'>
          <div className={`app__form__content__custom-input ${user.username && user.username.error && 'error'}`}>
            <label for='username'>Username:</label>
            <input className='app__form__content__custom-input__username'
              type='text' name='username' id='username'
              placeholder='Username here' onChange={handleChange}
              value={(user.username && user.username.value) || ''}/>
              {user.username && user.username.error && 
                (<p className='app__form__content__custom-input__error'>{user.username.error}</p>)}
          </div>
          <div className={`app__form__content__custom-input ${user.email && user.email.error && 'error'}`}>
            <label for='email'>Email:</label>
            <input className='app__form__content__custom-input__email'
              type='email' name='email' id='email'
              placeholder='Email here' onChange={handleChange}
              value={(user.email && user.email.value) || ''}/>
              {user.email && user.email.error && 
                (<p className='app__form__content__custom-input__error'>{user.email.error}</p>)}
          </div>
          <div className={`app__form__content__custom-input ${user.password && user.password.error && 'error'}`}>
            <label for='password'>Password:</label>
            <input className='app__form__content__custom-input__password'
              type='password' name='password' id='password'
              placeholder='Password here' onChange={handleChange}
              value={(user.password && user.password.value) || ''}/>
              {user.password && user.password.error && 
                (<p className='app__form__content__custom-input__error'>{user.password.error}</p>)}
          </div>
          <div className={`app__form__content__custom-input ${user.confirmPassword && user.confirmPassword.error && 'error'}`}>
            <label for='confirmPassword'>Confirm Password:</label>
            <input className='app__form__content__custom-input__confirm-password'
              type='password' name='confirmPassword' id='confirmPassword'
              placeholder='Confirm password here' onChange={handleChange}
              value={(user.confirmPassword && user.confirmPassword.value) || ''}/>
              {user.confirmPassword && user.confirmPassword.error && 
                (<p className='app__form__content__custom-input__error'>{user.confirmPassword.error}</p>)}
          </div>
          <button className='app__form__content__submit-btn'>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
