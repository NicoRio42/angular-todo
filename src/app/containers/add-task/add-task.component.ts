import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    public taskStoreService: TaskStoreService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe(obs =>
      this.router.navigate(['overview'])
    )
  }

}
