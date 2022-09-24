import Product from './Product';

export default function ProductItem({ product, onAddToCartClick }) {
  return (
    <div className='container d-flex flex-nowrap mb-3 w-75'>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.inventory}
      />
      <button
        onClick={onAddToCartClick}
        className='btn btn-primary'
        disabled={product.inventory > 0 ? '' : 'disabled'}
      >
        {product.inventory > 0 ? 'Art to cart' : 'Sold out'}
      </button>
    </div>
  );
}
