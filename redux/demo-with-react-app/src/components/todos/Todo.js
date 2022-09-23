import { Main } from '../layouts/Main';
import { useTitle } from '../../hooks/useTitle';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

export default function Todo() {
  useTitle('Todo App');

  return (
    <Main>
      <div className='container'>
        <header className='text-center m-3'>
          <h1 className='fw-bold'>Todo App</h1>
        </header>
        <main className='container'>
          <NewTodo />
          <TodoList />
        </main>
      </div>
    </Main>
  );
}
