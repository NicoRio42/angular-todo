import { Component, OnInit } from '@angular/core';

import { TaskStoreService } from '../../services/task-store.service'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(
    public taskStoreService: TaskStoreService,
  ) { }

  ngOnInit(): void {
  }

}
