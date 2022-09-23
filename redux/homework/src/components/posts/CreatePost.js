import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main } from '../layouts/Main';
import { Formik, Form, Field } from 'formik';
import { createPost } from '../../redux/actions/postAction';

export default function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Main>
      <div className='container'>
        <header>
          <h1>Create new post</h1>
        </header>
        <main className='container d-flex flex-column align-items-center'>
          <Formik
            initialValues={{
              title: '',
              body: '',
            }}
            enableReinitialize={true}
            onSubmit={values => {
              dispatch(createPost(values));
              setTimeout(() => {
                navigate('/posts');
              }, 1500);
            }}
          >
            {({ errors, touched }) => (
              <Form className='mt-3 w-75'>
                <div className='mb-3'>
                  <label
                    htmlFor='title'
                    className='form-label'
                  >
                    Title
                  </label>
                  <Field
                    className='form-control'
                    type='text'
                    id='title'
                    name='title'
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='body'
                    className='form-label'
                  >
                    Content
                  </label>
                  <Field
                    as='textarea'
                    className='form-control'
                    id='body'
                    name='body'
                    rows='10'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary w-100'
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </main>
      </div>
    </Main>
  );
}
