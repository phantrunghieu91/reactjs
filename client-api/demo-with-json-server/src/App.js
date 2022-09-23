import { useEffect, useState } from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/todos',
});

function App() {
  const [todoText, setTodoText] = useState('');
  const [action, setAction] = useState({ status: 'add', todo: {} });
  const [todos, setTodos] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  const getTodos = (...theArgs) => {
    if (theArgs.length === 0) {
      client
        .get('')
        .then(res => {
          setTodos(res.data);
        })
        .catch(err => {
          throw err;
        });
    } else {
      client
        .get(`/${theArgs[0]}`)
        .then(res => {
          setTodos(
            todos.map(todo => {
              if (todo.id === res.data.id) todo = res.data;
              return todo;
            })
          );
        })
        .catch(err => {
          throw err;
        });
    }
  };

  useEffect(() => {
    if (todos.length === 0) getTodos();
  });

  const handleSubmit = () => {
    if (action.status === 'add') {
      client
        .post(``, { text: todoText, completed: false })
        .then(res => {
          if (res.status === 201) getTodos();
          setTodoText('');
        })
        .catch(err => {
          throw err;
        });
    } else {
      client
        .put(`/${action.todo.id}`, {
          ...action.todo,
          text: todoText,
        })
        .then(res => {
          getTodos(res.data.id);
          setTodoText('');
          setAction({
            status: 'add',
            todo: {},
          });
        })
        .catch(err => {
          throw err;
        });
    }
  };

  const handleChecked = (e, todo) => {
    client
      .put(`/${todo.id}`, {
        ...todo,
        completed: e.target.checked,
      })
      .then(res => {
        if (res.status === 200) getTodos(todo.id);
      })
      .catch(err => {
        throw err;
      });
  };

  const selectTodo = todo => {
    setTodoText(todo.text);
    setAction({
      status: 'edit',
      todo,
    });
  };

  const deleteTodo = id => {
    client
      .delete(`/${id}`)
      .then(res => {
        if (res.status === 200) getTodos();
      })
      .catch(err => {
        throw err;
      });
  };

  return (
    <div className='container-fluid bg-dark text-light vh-100 over-flow-hidden d-flex flex-column align-items-center'>
      <h1 className='text-center mb-3 mt-5'>Simple Todo App</h1>
      <div className='w-50 input-group mb-3'>
        <input
          type='text'
          className='form-control w-75 p-3'
          placeholder='Enter what you want to do here'
          value={todoText}
          onChange={e => {
            setTodoText(e.target.value);
          }}
        />
        <button
          className='btn btn-primary w-25 text-capitalize'
          onClick={handleSubmit}
        >
          {action.status}
        </button>
      </div>
      <div className='container w-75'>
        <div className='container d-flex justify-content-between pe-3 mb-3'>
          <h2>Todo List</h2>
          <div
            className='btn-group'
            role='group'
          >
            <button
              className='btn btn-light'
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
              {isHidden ? 'Show' : 'Hide'} completed
            </button>
          </div>
        </div>
        <ul className='list-group'>
          {todos.map(todo => (
            <li
              className={`list-group-item mb-1 bg-secondary p-3 ${
                isHidden && todo.completed ? 'd-none' : 'd-block'
              }`}
              key={todo.id}
            >
              <div className='input-group d-flex justify-content-center'>
                <div className='input-group-text'>
                  <input
                    type='checkbox'
                    name='completed'
                    value={'' || todo.text}
                    className='form-check-input'
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onChange={e => {
                      handleChecked(e, todo);
                    }}
                  />
                </div>
                <label
                  htmlFor={`todo-${todo.id}`}
                  className='form-check-label stretched-link input-group-text w-50'
                >
                  <span
                    className={`overflow-hidden ${
                      todo.completed ? 'text-decoration-line-through' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                </label>
                <button
                  className='btn btn-success'
                  onClick={e => {
                    selectTodo(todo);
                  }}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
