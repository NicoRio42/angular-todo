import { Component, OnInit } from '@angular/core';

import { TaskStoreService } from '../../services/task-store.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    public taskStore: TaskStoreService,
  ) { }

  ngOnInit(): void {
  }

  filterTasks(filterText: string) {
    this.taskStore.taskFilterText = filterText
  }

}
