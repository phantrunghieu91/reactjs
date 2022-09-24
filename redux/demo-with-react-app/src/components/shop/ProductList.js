import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux-with-thunk/actions/cartAction';
import { getVisibleProducts } from '../../redux-with-thunk/reducers/productReducer';
import ProductItem from './ProductItem';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => getVisibleProducts(state.products));

  const dispatchAddToCart = id => dispatch(addToCart(id));

  return (
    <div className='container'>
      <h2>Products</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClick={() => dispatchAddToCart(product.id)}
        />
      ))}
    </div>
  );
}
