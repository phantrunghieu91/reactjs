import { Main } from './layouts/Main';
import { useTitle } from '../hooks/useTitle';

export default function Home() {
  useTitle('Home page');
  return (
    <Main>
      <h1>Home page</h1>
      <ol className='list-group list-group-numbered'>
        <li className='list-group-item'>Sign in with redux-saga</li>
        <li className='list-group-item'>Sign in with redux-thunk</li>
        <li className='list-group-item'>Todo App</li>
        <li className='list-group-item'>Shopping cart (Still not working)</li>
        <li className='list-group-item'>Hacker news</li>
      </ol>
    </Main>
  );
}
