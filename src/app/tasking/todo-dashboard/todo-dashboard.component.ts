import { CLEAR_TODOS } from './../actions';
import { Store } from '@ngrx/store';
import { ITaskingState } from './../store';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  todos;
  lastUpdate;

  constructor(private store: Store<ITaskingState>) {
    const taskingStore = store.select('tasking');

    taskingStore.subscribe((state: ITaskingState) => {
      if (state) {
        this.todos = state.todos;
        this.lastUpdate = state.lastUpdate;
      }
  });
  }

  clearTodos() {
    this.store.dispatch({ type: CLEAR_TODOS });
  }
}
