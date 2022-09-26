import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../layouts/Main';
import { getProduct } from '../../redux/reducers/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector(state => getProduct(state.products, productId));
  return (
    <Main title='product detail'>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-6 border border-1'>
            <img
              className='img-fluid'
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className='col-6 border border-1'>
            <h3 className='fw-semibold mb-3'>{product.title}</h3>
            <h5 className='rounded-pill w-25 text-center p-2 bg-primary text-light mb-3'>
              ${product.price}
            </h5>
            <p className='fw-semibold text-bg-info p-2 mb-3 rounded'>
              {product.category}
            </p>
            <p>{product.description}</p>
            <button className='btn btn-danger'>Add to cart</button>
          </div>
        </div>
      </div>
    </Main>
  );
}
