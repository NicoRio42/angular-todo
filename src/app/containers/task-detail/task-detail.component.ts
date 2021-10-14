import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = {id: -1, title: "", done: false, description: ""}

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    public store: TaskStoreService,
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.taskService.getTask(id).subscribe(obs => console.log('task fetched'))
  }

}
