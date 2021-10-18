import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  
  deleteTask(taskToDelete: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${taskToDelete.id}`;

    return this.http.delete<Task>(url, this.httpOptions).pipe(
      tap(obs => {
        this.store.tasks = this.store.tasks.filter(task => task.id !== taskToDelete.id)
      }),
    );
  }

  sortTasks(): void {
    let tasksToSort = [...this.store.tasks]
    tasksToSort.sort((a: Task, b: Task) => {
      let dateA = new Date(a.deadline)
      let dateB = new Date(b.deadline)
      if (dateA > dateB)
         return -1
      if (dateA < dateB)
         return 1
      return 0;
    })
    this.store.tasks = tasksToSort
  }
}