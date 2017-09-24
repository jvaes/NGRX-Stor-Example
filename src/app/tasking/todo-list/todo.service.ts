import { Url } from 'url';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: Http) { }

  getTodos() {
    return this.http.get(this.url);
  }

  addTodo(todo) {
    return this.http.post(this.url, todo);
  }
}
