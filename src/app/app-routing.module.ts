import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './containers/overview/overview.component';
import { TaskDetailComponent } from './containers/task-detail/task-detail.component';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { ModifyTaskComponent } from './containers/modify-task/modify-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
  { path: 'modify-task/:id', component: ModifyTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
