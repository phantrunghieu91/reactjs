import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/actions/todoAction';
import { v4 as uuidv1 } from 'uuid';

export default function NewTodo() {
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <Formik
        initialValues={{ text: '' }}
        enableReinitialize={true}
        onSubmit={values => {
          dispatch(addNewTodo({ id: uuidv1(), text: values.text }));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='input-group'>
              <Field
                className='form-control w-75 p-3'
                name='text'
                placeholder='Enter new todo'
              />
              <button
                className='btn btn-primary w-25'
                type='submit'
              >
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
