import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    {path: '', component: TodoListComponent},
    {path: 'task/:id', component: TaskComponent}
];
