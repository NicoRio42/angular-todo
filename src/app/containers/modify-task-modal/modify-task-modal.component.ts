import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: 'modify-task-modal',
  templateUrl: './modify-task-modal.component.html',
  styleUrls: ['./modify-task-modal.component.css']
})
export class ModifyTaskModalComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    public taskStore: TaskStoreService,
  ) { }

  ngOnInit(): void {
  }

  modifyTask(modifiedTask: Task) {
    const id = this.taskStore.selectedTask.task_id
    modifiedTask.task_id = id // If not, 404 error
    this.taskService.modifyTask(id, modifiedTask).subscribe(obs => this.closeModal())
  }

  closeModal() {
    this.taskStore.modifyTaskModalIsVisible = false
  }
}
