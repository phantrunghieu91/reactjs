import { Main } from './layouts/Main';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useTitle } from '../hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions/loginAction';
import { useEffect } from 'react';

const formSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Must have at least 6 chars'),
});

export default function SigninWithSaga() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userLogined = useSelector(state => state.loginReducer.userLogined);

  const login = user => {
    dispatch(loginRequest(user));
  };

  useEffect(() => {
    if (userLogined.email) {
      navigate('/users-saga');
    } else {
      console.log('UserLogined not found');
    }
  }, [userLogined, navigate]);

  useTitle(`Sign in`);
  return (
    <Main>
      <div className='container-fluid d-flex flex-column align-content-center'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={values => {
            login(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className='container-fluid w-50 bg-dark bg-gradient mt-3 p-5 rounded-4'>
              <h1 className='text-center fw-bold mb-3 text-white'>
                Sign in with Saga
              </h1>
              <div className='form-floating mb-3'>
                <Field
                  className='form-control'
                  id='emailInput'
                  name='email'
                  type='email'
                  placeholder='Email address'
                />
                <div
                  className={`alert ${
                    touched.email && errors.email ? 'alert-danger' : ''
                  }`}
                  role='alert'
                >
                  {touched.email && errors.email ? errors.email : ''}
                </div>
                <label htmlFor='emailInput'>Email Address</label>
              </div>
              <div className='form-floating mb-3'>
                <Field
                  className='form-control'
                  id='passwordInput'
                  name='password'
                  type='password'
                  placeholder='Password'
                />
                <div
                  className={`alert ${
                    touched.password && errors.password ? 'alert-danger' : ''
                  }`}
                  role='alert'
                >
                  {touched.password && errors.password ? errors.password : ''}
                </div>
                <label htmlFor='passwordInput'>Password</label>
              </div>
              <button
                className='btn btn-primary w-100 fw-bold fs-2'
                type='submit'
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Main>
  );
}
