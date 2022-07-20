import { Tasks } from './../../../mock-tasks';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
