import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; 

  constructor() { }

  ngOnInit() {
  }

  /**
   * Give dyanmic class to todo elements
   */
  setClasses() {
    return this.todo.completed ? 'is-complete' : ''
  }

  /**
   * Change the completed value of todo element
   * @param todo Todo
   */
  onToggle(todo) {
    todo.completed = !todo.completed
  }

  onDelete(todo) {
    
  }

}
