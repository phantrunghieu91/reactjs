import './App.scss';
import {Formik, Form, Field} from 'formik';

export default function App() {
  return (
    <div className='simple-form'>
      <div className='simple-form__header'>
        <h1 className='simple-form__header__title'>Simple Register Fake Form</h1>
      </div>
      <div className='simple-form__content'>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={async values => {
            if(values.yourName === ''){
              alert(`Your name can't be empty!`);
            } else alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className='simple-form__content__register-form'>
            <Field className='simple-form__content__register-form__username'
              name='username' placeholder='Enter your username here'
              type='text' />
            <Field className='simple-form__content__register-form__email'
              name='email' placeholder='Enter your email here'
              type='email'/>
            <Field className='simple-form__content__register-form__password' 
              name='password' placeholder='Enter password here' 
              type='password'/>
            <Field className='simple-form__content__register-form__confirm-pw'
              type='password'
              name='confirmPassword' placeholder='Enter confirm password here'/>
            <button className='simple-form__content__register-form__submit'
            type='submit'>Register</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}