import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskStoreService } from '../../services/task-store.service'

@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {

  taskFilter = new FormControl('');
  @Output() filterTasksEvent = new EventEmitter<string>();

  constructor(
    public taskStoreService: TaskStoreService,
  ) { }

  ngOnInit(): void {
    this.taskFilter.valueChanges.subscribe(value => {
      this.filterTasksEvent.emit(value);
    })
  }

}
