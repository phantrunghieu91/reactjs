import Main from '../layouts/Main';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { addPostRequest } from '../../redux/actions/posts';

const formSchema = yup.object().shape({
  title: yup.string().required('Required'),
  body: yup.string().required('Required'),
});

const randomUserId = () => Math.round(Math.random() * 10 + 1);

export default function NewPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Main title='New Post'>
      <div className='container w-75 bg-light p-3'>
        <h1 className='fw-semibold mb-3'>Create new post</h1>
        <Formik
          initialValues={{
            title: '',
            body: '',
          }}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={values => {
            dispatch(
              addPostRequest({
                post: {
                  ...values,
                  userId: randomUserId(),
                },
                navigate: navigate,
              })
            );
          }}
        >
          {({ errors, touched }) => (
            <Form className='p-4'>
              <div className='form-floating mb-3'>
                <Field
                  className={`form-control ${
                    touched.title && errors.title ? 'is-invalid' : ''
                  }`}
                  name='title'
                  id='title'
                  placeholder='Title here'
                />
                <label
                  htmlFor='title'
                  className={`${
                    touched.title && errors.title ? 'text-danger' : ''
                  }`}
                >
                  {touched.title && errors.title ? `${errors.title}` : 'Tittle'}
                </label>
              </div>
              <div className='form-floating mb-3'>
                <Field
                  className={`form-control ${
                    touched.body && errors.body ? 'is-invalid' : ''
                  }`}
                  as='textarea'
                  name='body'
                  id='body'
                  placeholder='body here'
                  style={{
                    height: '10rem',
                  }}
                />
                <label
                  htmlFor='body'
                  className={`${
                    touched.body && errors.body ? 'text-danger' : ''
                  }`}
                >
                  {touched.body && errors.body ? `${errors.body}` : 'Content'}
                </label>
              </div>
              <button
                className='btn btn-primary w-100 fs-3 mb-3'
                type='submit'
              >
                Create
              </button>
              <button
                className='btn btn-secondary w-100 fs-3'
                onClick={() => {
                  navigate('/');
                }}
              >
                Back
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Main>
  );
}
