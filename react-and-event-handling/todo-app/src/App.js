import {Component} from 'react';
import DisplayTodos from './components/DisplayTodos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: '',
      actionText: 'add',
      edittingTodoIndex: undefined
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if(this.state.actionText === 'add') {
      if(this.isToDoValid()) {
        this.setState(prevState => {
          let { todos, todo } = prevState;
          todos = [...todos, todo];
          todo = '';
          return { todos, todo };
        });
      } else {
        alert('Please enter some text in textbox!');
      }
    } else if(this.state.actionText === 'edit') {
      if(this.isToDoValid()) {
        this.setState(prevState => {
          let { todos, todo, actionText, edittingTodoIndex } = prevState;
          todos[edittingTodoIndex] = todo;
          todo = '';
          actionText = 'add';
          edittingTodoIndex = undefined;
          return { todos, todo, actionText, edittingTodoIndex };
        });
      }
    }
  };

  handleEditClick = (e) => {
    const index = +e.target.parentNode.parentNode.getAttribute('data-index');
    this.setState(prevState => ({
      actionText: 'edit',
      edittingTodoIndex: index,
      todo: prevState.todos[index]
    }));
  };

  isToDoValid = () => {
    return this.state.todo !== '';
  };

  handleOnChange = (e) => {
    const selfValue = e.currentTarget.value;
    this.setState(prevState => {
      let { todo } = prevState.todo;
      todo = selfValue;
      return { todo };
    });
  };

  handleRemoveTodo = (e) => {
    const removedIndex = +e.target.parentNode.parentNode.getAttribute('data-index');
    this.setState(prevState => {
      let { todos } = prevState;
      todos = [...todos.filter((todo, index) => index !== removedIndex)];
      return { todos };
    });
  };

  render() {
    return (
      <div className='todo-app'>
        <h1 className='todo-app__header'>TODO APP</h1>
        <div className='todo-app__content'>
          <form className='todo-app__content__form'>
            <h3 className='todo-app__content__form__caption'>{this.state.actionText === 'add' ? 'add new todo' : `edit ${this.state.todos[this.state.edittingTodoIndex]}`}</h3>
            <input type='text'
              className='todo-app__content__form__todo-text'
              onChange={this.handleOnChange}
              value={this.state.todo}
            />
            <button type='submit'
              className='todo-app__content__form__submit'
              onClick={this.handleClick}>{this.state.actionText}</button>
          </form>
          <div className='todo-app__content__todo-list'>
            <h3 className='todo-app__content__todo-list__header'>Todo List</h3>
            <DisplayTodos 
              todoList={this.state.todos} 
              handleRemoveTodo={this.handleRemoveTodo}
              handleEditClick = {this.handleEditClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
