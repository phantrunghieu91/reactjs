import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector(state => state.todoReducer);
  return (
    <div className='container mt-3'>
      <header>
        <h2>Todo List</h2>
      </header>
      <main className='container mt-3'>
        {todos.map((todo, index) => (
          <TodoListItem
            todo={todo}
            key={index}
          />
        ))}
      </main>
    </div>
  );
}
