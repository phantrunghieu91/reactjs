import { Component } from "react";

class DisplayTodos extends Component {
    render() {
        if(this.props.todoList.length > 0)
        return (
            <ul className="todo-app__content__todo-list__display">
                {
                    this.props.todoList.map((todo,index) => {
                        return (
                            <li className="todo-app__content__todo-list__display__todo-item" 
                                data-index={index} 
                                key={`todo-${index}`}>
                                <span>{todo}</span>
                                <div className='todo-app__content__todo-list__display__todo-item__btn-grp'>
                                    <button
                                        className="todo-app__content__todo-list__display__todo-item__btn-grp__edit"
                                        onClick={this.props.handleEditClick}>Edit</button>
                                    <button 
                                        className="todo-app__content__todo-list__display__todo-item__btn-grp__remove"
                                        onClick={this.props.handleRemoveTodo}>Remove</button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default DisplayTodos;