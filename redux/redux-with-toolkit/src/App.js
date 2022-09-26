import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GroceryList from './components/GroceryList';
import Modal from './components/Modal';
import { getGroceryItems } from './features/grocery/grocerySlice';

function App() {
  const { isOpen } = useSelector(state => state.modal);
  const { groceryItems, isLoading } = useSelector(state => state.grocery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroceryItems());
  }, []);

  if (isLoading)
    return (
      <div className='container vh-100 w-100 p-0 d-flex justify-content-center align-items-center'>
        <h1>Loading....</h1>
      </div>
    );
  else
    return (
      <div className='App'>
        {isOpen ? <Modal /> : ''}
        <h1 className='p-3 mb-3 fw-bold bg-secondary text-light'>
          Grocery App
        </h1>
        <GroceryList />
      </div>
    );
}

export default App;
