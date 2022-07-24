import { TaskService } from './../../services/task.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/ITask';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  result: Subscription;
  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ToggleTaskReminder(task: Task){
    task.reminder = !task.reminder;
    this.service.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task){
    this.service.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  updateTask(task: Task){
    const result = this.service.updateTask(task).subscribe( () => task);
    console.log(result);
  }

  DeleteTask(task: Task) {
    this.result = this.service
    .deleteTask(task) //until here we are working with server side.
    .subscribe(
      () => this.tasks = this.tasks.filter( t => t.id !== task.id)
    );// here we are filter our response for UI
  }

  ngOnDestroy(): void {
    //this.result.unsubscribe();
  }
}
