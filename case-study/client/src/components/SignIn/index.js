import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserByUsername } from '../../features/userSlice';

import MainLayout from '../layouts/Main';
import FloatInput from './FloatInput';
import { Button, Alert, Form } from 'react-bootstrap';
import { useEffect } from 'react';

const SignIn = () => {
  const { error, userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.username) navigate('/');
  }, [navigate, userInfo]);

  return (
    <MainLayout>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={yup.object().shape({
          username: yup
            .string()
            .min(5, 'Must have at least 5 chars')
            .required('Required'),
          password: yup
            .string()
            .min(6, 'Must have at least 6 chars')
            .required('Required'),
        })}
        enableReinitialize={true}
        onSubmit={values => {
          dispatch(getUserByUsername(values));
        }}
      >
        {({ handleSubmit }) => (
          <Form
            className='container-fluid w-75 h-75 bg-dark bg-gradient mt-3 p-5 rounded-4 d-flex flex-column justify-content-center'
            noValidate
            onSubmit={handleSubmit}
          >
            <h1 className='text-center fw-bold mb-5 text-white'>Sign in</h1>
            {error && (
              <Alert className='text-center mb-3 text-light text-bg-danger p-3 rounded'>
                {error}
              </Alert>
            )}
            <FloatInput
              id='floatUsername'
              name='username'
              label='Username'
              type='text'
            />
            <FloatInput
              id='floatPassword'
              name='password'
              label='Password'
              type='password'
            />
            <Button
              variant='primary'
              className='w-100 fw-bold fs-2 mb-3'
              as='input'
              type='submit'
              value='Sign in'
            />
            <h5 className='text-light text-center'>
              Don't have an account ? <Link to='/sign-up'>Register</Link>
            </h5>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
};

export default SignIn;
