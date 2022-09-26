import { Link } from 'react-router-dom';

export default function ProductReview({ id, title, price, category, image }) {
  return (
    <div className='col-4 card mb-1 p-2'>
      <img
        alt={title}
        src={image}
        className='card-img-top'
        style={{ height: '20rem' }}
      />
      <div className='card-body'>
        <h5 className='card-title h-50 overflow-hidden'>
          <Link
            to={`/${id}`}
            className='text-decoration-none'
          >
            {title}
          </Link>
        </h5>
        <h5 className='card-text mb-2 h-25'>${price}</h5>
        <h6 className='card-subtitle text-muted h-25'>{category}</h6>
      </div>
    </div>
  );
}
