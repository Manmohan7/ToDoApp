import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'One',
        completed: false
      },{
        id: 2,
        title: 'Two',
        completed: true
      },{
        id: 3,
        title: 'Three',
        completed: false
      }
    ]
  }
}
