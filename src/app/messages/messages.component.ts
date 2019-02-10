import {Component, Inject, OnInit} from '@angular/core';
import {AppStore} from '../app.store';
import {Store} from 'redux';
import {addMessage} from '../app.actions';
import {MessageInterface} from '../app.interfaces';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageInterface[];

  constructor(
    @Inject(AppStore) private store: Store
  ) {
  }

  ngOnInit() {
    this.store.subscribe(() => {
      const state = this.store.getState();
      this.messages = state.messages;
    });

    this.store.dispatch(addMessage('Success'));
  }
}
