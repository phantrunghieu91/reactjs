export default function Product({ price, quantity, title }) {
  return (
    <div className='container bg-light p-3'>
      {title} - ${price}
      {quantity ? ` x ${quantity}` : null}
    </div>
  );
}
