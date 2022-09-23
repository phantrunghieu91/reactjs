import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoAction';

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='container bg-light mb-3 p-3 d-flex justify-content-between align-items-center w-75'>
      <h4>{todo.text}</h4>
      <button
        className='btn btn-danger'
        onClick={() => {
          handleRemove(todo.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}
