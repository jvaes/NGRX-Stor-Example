import { Title } from '@angular/platform-browser';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './../actions';
import { ITaskingState } from './../store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos;

  constructor(private store: Store<ITaskingState>) {
    this.todos = this.store.select<ITaskingState>('tasking');
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    this.store.dispatch({ type: ADD_TODO, payload: { title: input.value } });
    input.value = '';
  }

  toggleTodo(todo) {
    this.store.dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
  }

  removeTodo(todo) {
    this.store.dispatch({ type: REMOVE_TODO, payload: { id: todo.id } });
  }
}
