import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Main } from '../layouts/Main';
import { editPost, getPost } from '../../redux/actions/postAction';
import { Form, Formik, Field } from 'formik';

export default function Post() {
  const { postID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(getPost(postID));
  }, [postID]);

  return (
    <Main>
      <div className='container d-flex flex-column align-items-center'>
        <h1>Edit Post</h1>
        <Formik
          initialValues={post}
          enableReinitialize={true}
          onSubmit={values => {
            dispatch(editPost(postID, values));
            setTimeout(() => {
              navigate('/posts');
            }, 1000);
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
      </div>
    </Main>
  );
}
