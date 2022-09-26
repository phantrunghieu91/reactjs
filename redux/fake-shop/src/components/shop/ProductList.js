import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/reducers/products';
import ProductReview from './ProductReview';

export default function ProductList() {
  const products = useSelector(state => getProducts(state.products));

  return (
    <div className='container'>
      <div className='row'>
        {products.map(product => (
          <ProductReview
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
