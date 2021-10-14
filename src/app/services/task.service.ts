import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TaskStoreService } from './task-store.service';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasksUrl = 'api/tasks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    public store: TaskStoreService,
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      tap(tasks => this.store.tasks = tasks))
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(task => this.store.selectedTask = task)
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      tap(task => this.store.tasks = [...this.store.tasks, task])
    )
  }

  modifyTask(id: number, modifiedtask: Task): Observable<any> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.put<Task>(url, modifiedtask, this.httpOptions).pipe(
      tap(obs => {
        this.store.tasks = this.store.tasks.map(storeTask => {
          if (storeTask.id === modifiedtask.id) {
            return modifiedtask
          }
          return storeTask
        })
      })
    )
  }
}