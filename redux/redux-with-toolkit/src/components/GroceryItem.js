import {
  removeGroceryItem,
  increaseQuantity,
  decreaseQuantity,
} from '../features/grocery/grocerySlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

export default function GroceryItem({ id, name, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className='container d-flex justify-content-between align-items-center p-3 mb-3 border row row-cols-3'>
      <button
        className='btn btn-close col-1'
        onClick={() => {
          dispatch(removeGroceryItem(id));
        }}
      />
      <span className='col-7'>{name}</span>
      <div className='col-4 d-flex'>
        <button
          className='btn btn-outline-secondary w-25'
          onClick={() => {
            if (quantity === 1) dispatch(removeGroceryItem(id));
            else dispatch(decreaseQuantity(id));
          }}
        >
          -
        </button>
        <span className='d-flex align-items-center justify-content-center w-50'>{`${quantity}`}</span>
        <button
          className='btn btn-outline-secondary w-25'
          onClick={() => {
            dispatch(increaseQuantity({ id }));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
