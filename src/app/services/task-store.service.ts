import { Injectable } from '@angular/core';

import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {

  tasks: any[] = []
  selectedTask: Task = <Task>{}
  taskFilterText: string = ""
  addTaskModalIsVisible = false;
  modifyTaskModalIsVisible = false;

  constructor() { }
}
