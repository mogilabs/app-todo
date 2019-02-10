import {Component, Inject, OnInit} from '@angular/core';
import {AppStore} from '../app.store';
import {Store} from 'redux';
import {addMessage, addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters} from '../app.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  todos: object[];

  constructor(
    @Inject(AppStore) private store: Store
  ) {
  }

  ngOnInit() {
    this.store.subscribe(() => {
      const state = this.store.getState();
      this.todos = this.getVisibleTodos(state.todos, state.filter);
    });
    this.addTodo = this.addTodo.bind(this);
    this.todoClickHandler = this.todoClickHandler.bind(this);
  }

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      case VisibilityFilters.SHOW_ALL:
      default:
        return todos;
    }
  }

  todoClickHandler(i) {
    this.store.dispatch(toggleTodo(i));
  }

  addTodo(text) {
    this.store.dispatch(addTodo(text));
    this.store.dispatch(addMessage('Todo Saved Successfully!'));
  }
}
