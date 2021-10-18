import { Component, OnInit, ViewChild } from '@angular/core';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {

  @ViewChild(TaskFormComponent) form!: TaskFormComponent

  constructor(
    private taskService: TaskService,
    public taskStore: TaskStoreService,
  ) { }

  ngOnInit(): void {
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe(obs => {
      this.closeModal()
      this.form.clearForm()
    })
  }

  closeModal() {
    this.taskStore.addTaskModalIsVisible = false
  }

}
