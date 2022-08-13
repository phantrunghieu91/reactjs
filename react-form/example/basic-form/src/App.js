import './sass/App.scss';
import {useState} from 'react';

export default function App (){
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = user.username && user.email && user.password && user.confirmPassword;
    alert(isValid ? `Sign up success! ${JSON.stringify(user, null, 2)}` : 'Please fill out all fields!');
  };

  return (
    <div className='app'>
      <form className='app__form' onSubmit={handleSubmit}>
        <div className='app__form__header'>
          <h1>Basic Register Form</h1>
        </div>
        <div className='app__form__content'>
          <div className='app__form__content__custom-input'>
            <label for='username'>Username:</label>
            <input className='app__form__content__custom-input__username'
              type='text' name='username' id='username'
              placeholder='Username here' onChange={handleChange}
              value={user.username || ''}/>
          </div>
          <div className='app__form__content__custom-input'>
            <label for='email'>Email:</label>
            <input className='app__form__content__custom-input__email'
              type='email' name='email' id='email'
              placeholder='Email here' onChange={handleChange}
              value={user.email || ''}/>
          </div>
          <div className='app__form__content__custom-input'>
            <label for='password'>Password:</label>
            <input className='app__form__content__custom-input__password'
              type='password' name='password' id='password'
              placeholder='Password here' onChange={handleChange}
              value={user.password || ''}/>
          </div>
          <div className='app__form__content__custom-input'>
            <label for='confirmPassword'>Confirm Password:</label>
            <input className='app__form__content__custom-input__confirm-password'
              type='password' name='confirmPassword' id='confirmPassword'
              placeholder='Confirm password here' onChange={handleChange}
              value={user.confirmPassword || ''}/>
          </div>
          <button className='app__form__content__submit-btn'>Sign up</button>
        </div>
      </form>
    </div>
  );
}