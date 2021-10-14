import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    public taskStore: TaskStoreService,
  ) { }

  ngOnInit(): void {
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe(obs =>
      this.closeModal()
    )
  }

  closeModal() {
    this.taskStore.addTaskModalIsVisible = false
  }

}
