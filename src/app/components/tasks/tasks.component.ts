import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

}
