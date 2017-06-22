/**
 * Created by seif on 6/22/17.
 */
import {
  Action,
  ActionCreator,
  Reducer,
  Store
  createStore
} from 'redux';
import {Component, Inject} from "@angular/core";
import {OpaqueToken} from '@angular/core';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECRMENT';

export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});


export interface AppState {
  counter: number;
}


let initialState: AppState = {
  counter: 0
};

export const counterReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {counter: state.counter + 1});
    case DECREMENT:
      return Object.assign({}, state, {counter: state.counter - 1});
    default:
      return state;
  }
}

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export const store: Store<AppState> = createStore<AppState>(counterReducer(), devtools);

@Component({
  selector: 'counter-component',
  template: `

`
})
export class CounterComponent {
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}

@Component({
  selector: 'minimal-redux-app',
  template: `
<div>
<counter-component>
</counter-component>
</div>
`
})
export class CounterApp {
}

export const AppStore = new OpaqueToken('App.store');

