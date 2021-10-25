import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskService } from '../../services/task.service'

@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {

  taskFilter = new FormControl('');

  constructor(
    public taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskFilter.valueChanges.subscribe(value => {
      this.taskService.filterTasks(value)
    })
  }

}
