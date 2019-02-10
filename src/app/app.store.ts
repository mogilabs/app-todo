import {createStore, Store} from 'redux';
import todoApp from './app.reducers';
import {InjectionToken} from '@angular/core';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store {
  return createStore(
    todoApp,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export const appStoreProviders = [
  {
    provide: AppStore,
    useFactory: createAppStore
  }
];
