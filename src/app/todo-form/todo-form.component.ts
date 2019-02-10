import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  name: string;
  @Input() onSubmit: Function;

  constructor() {
  }

  ngOnInit() {
  }
}
