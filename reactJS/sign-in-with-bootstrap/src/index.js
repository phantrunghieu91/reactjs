import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.querySelector('#root').classList.add('container-fluid', 'd-flex', 'justify-content-center','align-items-center');
root.render(
  <div
    className='form-signin'>
    <form className='d-flex flex-column p-5 justify-content-center'>
      <h3 className='h1 mb-3 fw-bold text-center'>Please sign in</h3>
      <div className='form-floating'>
        <input 
          type='email' 
          className='form-control'
          id='float-email'
          placeholder='Email address'
        />
        <label for='float-email'>Email address</label>
      </div>
      <div className='form-floating mb-3'>
        <input 
          type='password'
          className='form-control'
          id='float-password'
          placeholder='Password'
        />
        <label for='float-password'>Password</label>
      </div>
      <div className="form-check mb-3 align-self-center">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className='btn btn-primary'>Sign in</button>
    </form>
  </div>
);

