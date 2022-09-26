import { clearGrocery } from '../features/grocery/grocerySlice';
import { closeModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div
      className='container-fluid vh-100 w-100 d-flex justify-content-center align-items-center bg-black bg-opacity-75 position-absolute'
      tabIndex='-1'
    >
      <div className='w-50 h-auto bg-light p-4 d-flex flex-column rounded'>
        <h4 className='mb-3'>Remove all items from your grocery list ?</h4>
        <div className='btn-group'>
          <button
            className='btn btn-danger'
            onClick={() => {
              dispatch(clearGrocery());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className='btn btn-success'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
