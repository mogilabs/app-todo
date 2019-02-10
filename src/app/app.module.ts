import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appStoreProviders} from './app.store';
import {FormsModule} from '@angular/forms';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {TodoListContainerComponent} from './todo-list-container/todo-list-container.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {MessagesComponent} from './messages/messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoListContainerComponent,
    TodoFormComponent,
    MessagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
