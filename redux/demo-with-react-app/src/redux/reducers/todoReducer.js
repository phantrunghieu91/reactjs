import * as t from '../types';

export const todoReducer = (
  state = [
    { id: 1, text: 'Learn redux' },
    { id: 2, text: 'Learn redux saga' },
  ],
  action
) => {
  switch (action.type) {
    case t.todo.ADD_NEW_TODO:
      return [...state, action.todo];
    case t.todo.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
