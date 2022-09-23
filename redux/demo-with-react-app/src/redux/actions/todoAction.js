import * as t from '../types';

export const addNewTodo = todo => ({
  type: t.todo.ADD_NEW_TODO,
  todo,
});

export const deleteTodo = id => ({
  type: t.todo.DELETE_TODO,
  id,
});
