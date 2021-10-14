import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Task } from '../../models/task';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnChanges {

  @Input() task:Task = <Task>{};
  
  taskForm = new FormGroup({
    id: new FormControl(this.task.id),
    title: new FormControl(this.task.title),
    done: new FormControl(this.task.done),
    description: new FormControl(this.task.description),
  })

  @Output() submitTaskEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // Update form with input value
    if (this.task) {
      let defaultTask = {...this.task}
      this.taskForm.setValue(defaultTask)
    }
  }

  onSubmit() {
    this.submitTaskEvent.emit(this.taskForm.value);
  }

}
