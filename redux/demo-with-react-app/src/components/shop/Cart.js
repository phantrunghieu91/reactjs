import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTotal,
  getCartProducts,
} from '../../redux-with-thunk/reducers/rootReducer';
import { checkout } from '../../redux-with-thunk/actions/cartAction';

const Cart = () => {
  const products = useSelector(getCartProducts);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();

  const hasProducts = products.length > 0;
  const cartItem = hasProducts ? (
    products.map(product => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  const handleCheckout = () => {
    dispatch(checkout(products));
  };

  return (
    <div className='container'>
      <h3>Your cart</h3>
      <div className='container mb-3'>{cartItem}</div>
      <p>Total: {total}</p>
      <button
        className='btn btn-success'
        disabled={hasProducts ? '' : 'disabled'}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
