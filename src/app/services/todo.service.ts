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

  /**
   * Fetch Todo items.
   * @param limit number of items to be fetched
   */
  getTodos(limit = 5): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}?_limit=${limit}`)
  }

  /**
   * Toggle the status of Todo item
   * @param todo Todo item 
   */
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.todoUrl}/${todo.id}`, todo, httpOptions)
  }

  /**
   * Delete the Todo item
   * @param todo Todo item
   */
  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.todoUrl}/${todo.id}`, httpOptions)
  }
}
