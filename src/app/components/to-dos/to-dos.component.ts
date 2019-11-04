import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos: Todo[];
  
  constructor() { }

  ngOnInit() {
    this.todos = [
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
