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
    id: new FormControl(),
    title: new FormControl(),
    deadline: new FormControl(),
    done: new FormControl(),
    description: new FormControl(),
  })

  @Output() submitTaskEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // Update form with input value
    if (this.task.id) {
      let defaultTask = {...this.task}
      this.taskForm.setValue(defaultTask)
    }
  }

  onSubmit() {
    this.submitTaskEvent.emit(this.taskForm.value);
  }

  clearForm() {
    this.taskForm.reset()
  }

}
