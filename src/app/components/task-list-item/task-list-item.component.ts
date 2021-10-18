import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: '[task-list-item]',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit, OnChanges {

  taskCheckbox = new FormControl(false);
  @Input() task:Task = <Task>{};

  constructor(
    private taskService: TaskService,
    public taskStore: TaskStoreService,
  ) { }

  ngOnInit(): void {
    this.taskCheckbox.valueChanges.subscribe(value => {
      // PUT task when "done" checkbox is modified
      let modifiedTask = {...this.task}
      modifiedTask.done = value
      this.taskService.modifyTask(modifiedTask.id, modifiedTask).subscribe(obs => {})
    })
  }

  ngOnChanges() {
    // Update form with input value
    this.taskCheckbox.setValue(this.task.done)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(obs => {})
  }

}
