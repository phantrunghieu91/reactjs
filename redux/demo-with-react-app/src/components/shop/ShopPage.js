import { useTitle } from '../../hooks/useTitle';
import { Main } from '../layouts/Main';
import Cart from './Cart';
import ProductList from './ProductList';

export default function ShopPage() {
  useTitle('Shopping cart');
  return (
    <Main>
      <header>
        <h1>Shopping cart</h1>
      </header>
      <ProductList />
      <Cart />
    </Main>
  );
}
