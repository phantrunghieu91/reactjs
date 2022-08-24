import Layout from '../components/Layout';
import css from '../styles/Todos.module.css';
import axios from 'axios';
import React from 'react';

class Todos extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            todo: {},
            showCompleted: true
        }
    }

    getTodos = async () => {
        return await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    };

    componentDidMount = () => {
        if(this.state.todos.length === 0) {
            this.getTodos()
                .then(res => {
                    this.setState({
                        todos: res.data.filter(ele => ele.userId === 1)
                    });
                })
                .catch(err => {
                    throw err;
                });
        }
    };

    addNewTodo = () => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                userId: 1,
                title: this.state.todo.title,
                completed: false
            })
            .then(res => {
                console.log(res);
                this.setState({
                    todos: [...this.state.todos, res.data]
                });
                this.setState({todo: {}});
            })
            .catch(err => {
                throw err;
            })
    };

    deleteTodo = (id) => {
        axios
            .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                this.setState(prevState => ({
                    todos: prevState.todos.filter(ele => ele.id !== id)
                }));
            })
        
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const {todo} = prevState;
            todo[name] = value;
            return todo;
        })
    };

    handleToggle = (index) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map((item, i) => {
                    if (i === index) {
                        return {
                            ...item,
                            completed: !prevState.todos[i].completed,
                        }
                    }
                    return item;
                })
            }
        })
    };

    handleShowHideCompleted = () => this.setState(prevState => ({ showCompleted: !prevState.showCompleted}));

    render() {
        const {todo, todos, showCompleted} = this.state;
        return (
            <Layout title='Todo app'>
                <div className={css.container}>
                    <header className={css.header}>
                        <h1>Todo App</h1>
                    </header>
                    <main className={css.content}>
                        <form className={css[`modify-form`]}
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.addNewTodo();
                        }}>
                            <header className={css[`form-header`]}>
                                <h3>Add new todo</h3>
                            </header>
                            <main className={css[`form-content`]}>
                                <input 
                                    type='text'
                                    name='title'
                                    placeholder='New todo here'
                                    value={todo.title || ''}
                                    onChange={this.handleChange}
                                />
                                <button type='submit'>Add</button>
                            </main>
                        </form>
                        <div className={css[`display-todos`]}>
                            <ul className={css[`todos-list`]}>
                            {
                                todos.length > 0 && todos.map((item, index) => (
                                    <li 
                                        className={`${css['todo']} ${item.completed && !showCompleted ? css['hide'] : ''}`}
                                        key={index}
                                    >
                                        <span 
                                            className={!item.completed ? css[`todo-title`] : `${css[`todo-title`]} ${css[`completed`]}`}
                                            onClick={() => this.handleToggle(index)}
                                        >{item.title}</span>
                                        <a className={css['delete-btn']} 
                                            onClick={() => {this.deleteTodo(item.id)}}
                                        />
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                        <div className={css[`button-group`]}>
                            <button className={css[`toggle-completed`]}
                                onClick={this.handleShowHideCompleted}
                            >{showCompleted ? `Hide Completed` : `Show Completed`}</button>
                        </div>
                    </main>
                </div>
            </Layout>
        );
    }
}

export default Todos;