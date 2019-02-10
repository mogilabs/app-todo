import {Component, Input} from '@angular/core';
import {TodoInterface} from '../app.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: TodoInterface[];
  @Input() onTodoClick: (id: number) => undefined;
}
