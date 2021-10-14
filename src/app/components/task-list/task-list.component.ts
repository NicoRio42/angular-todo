import { Component, OnInit } from '@angular/core';

import { TaskStoreService } from '../../services/task-store.service'

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
