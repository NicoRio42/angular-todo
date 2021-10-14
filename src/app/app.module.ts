import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { TaskDetailComponent } from './containers/task-detail/task-detail.component';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { ModifyTaskComponent } from './containers/modify-task/modify-task.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { AddTaskModalComponent } from './containers/add-task-modal/add-task-modal.component';
import { ModifyTaskModalComponent } from './containers/modify-task-modal/modify-task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    OverviewComponent,
    TaskDetailComponent,
    AddTaskComponent,
    ModifyTaskComponent,
    TaskFilterComponent,
    TaskListItemComponent,
    AddTaskModalComponent,
    ModifyTaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
