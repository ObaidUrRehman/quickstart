/**
 * Created by orehman on 11/1/2016.
 */


import {Component, OnInit} from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'todo',
  templateUrl: './app/todo.component.html'
})
export class TodoComponent {
  todos: Array<Todo> = [];
  todo: Todo = new Todo();

  addTodo(todo){
    this.todo.title;
    this.todos.push(todo);
    this.todo = new Todo();
  }

}
