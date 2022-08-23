import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import css from '../styles/Todos.module.css';
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState({});

    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    const getTodos = async () => {
        return await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    };

    const addNewTodo = () => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                userId: 1,
                id: todos.length + 1,
                title: todo.title,
                completed: false
            })
            .then(res => {
                console.log(res);
                getTodos()
            })
            .catch(err => {
                throw err;
            })
    };

    useEffect(() => {
        if(todos.length === 0) {
            getTodos()
                .then(res => {
                    setTodos(res.data.filter(ele => ele.userId === 1));
                })
                .catch(err => {
                    throw err;
                });
        }
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo({...todo, [name]: value});
    };

    const handleToggle = (index) => {
        console.log(todos[index]);
        const tempTodos = todos;
        const modifyTodo = todos[index];
        modifyTodo.completed = !modifyTodo.completed;
        tempTodos[index] = modifyTodo; 
        setTodos(tempTodos);
        console.log(todos[index]);
    };

    return (
        <Layout title='Todo app'>
            <div className={css.container}>
                <header className={css.header}>
                    <h1>Todo App</h1>
                </header>
                <main className={css.content}>
                    <form className={css[`modify-form`]}
                    onSubmit={() => {addNewTodo()}}>
                        <header className={css[`form-header`]}>
                            <h3>Add new todo</h3>
                        </header>
                        <main className={css[`form-content`]}>
                            <input 
                                type='text'
                                name='title'
                                placeholder='New todo here'
                                value={todo.title || ''}
                                onChange={handleChange}
                            />
                            <button type='submit'>Add</button>
                        </main>
                    </form>
                    <div className={css[`display-todos`]}>
                        <ul className={css[`todos-list`]}>
                            {todos.map((item, index) => (
                                <li 
                                    className={css[`todo`]}
                                    key={index}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className={item.completed ? css[`todo-title`] : `${css[`todo-title`]} ${css[`completed`]}`}>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default Todos;