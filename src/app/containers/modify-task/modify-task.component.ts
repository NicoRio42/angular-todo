import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../services/task.service'
import { TaskStoreService } from '../../services/task-store.service'

import { Task } from '../../models/task';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    public store: TaskStoreService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTask()
  }

  getTask(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.taskService.getTask(id).subscribe(obs => console.log("task fetched"))
  }

  modifyTask(modifiedTask: Task) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    modifiedTask.task_id = id // If not, 404 error
    this.taskService.modifyTask(id, modifiedTask).subscribe(obs => {
      this.router.navigate(['task-detail/' + id]);
    })
  }

}
