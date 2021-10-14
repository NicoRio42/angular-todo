import { Component, OnInit } from '@angular/core';

import { TaskService } from './services/task.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-todo';
  
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(obs => console.log('tasks fetched'))
  }
}