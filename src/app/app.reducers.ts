import {combineReducers} from 'redux';
import {ADD_MESSAGE, ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters} from './app.actions';

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  messages
});

export default todoApp;
