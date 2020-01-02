import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos: Todo[];
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos(10).subscribe(todos => {
      this.todos = todos
    })
  }

}
