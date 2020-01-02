import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos(limit = 5): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}?_limit=${limit}`)
  }

  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.todoUrl}/${todo.id}`, todo, httpOptions)
  }
}
