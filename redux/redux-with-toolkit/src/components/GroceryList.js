import { useSelector, useDispatch } from 'react-redux/es/exports';
import GroceryItem from './GroceryItem';
import { openModal } from '../features/modal/modalSlice';

export default function GroceryList() {
  const { groceryItems } = useSelector(state => state.grocery);
  const dispatch = useDispatch();

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h2>Grocery List</h2>
      <div className='container'>
        {groceryItems && groceryItems.length > 0
          ? groceryItems.map(item => (
              <GroceryItem
                key={item.id}
                {...item}
              />
            ))
          : 'There is no item here'}
      </div>
      <button
        className='btn btn-primary'
        data-bs-toggle='modal'
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Clear Grocery
      </button>
    </div>
  );
}
