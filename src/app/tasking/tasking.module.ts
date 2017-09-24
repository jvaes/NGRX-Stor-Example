import { TodoService } from './todo-list/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TodoListComponent, TodoDashboardComponent],
  declarations: [TodoListComponent, TodoDashboardComponent],
  providers: [TodoService]
})
export class TaskingModule { }
