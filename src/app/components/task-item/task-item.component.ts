import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/ITask';
import { faTimes, faPen, faP } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() updateTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() toggelReminder: EventEmitter<Task> = new EventEmitter<Task>();
  iconTimes = faTimes;
  iconPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

  UpdateTask(task: Task){
    this.updateTask.emit(task);
  }

  OnDelete(task: Task){
    this.deleteTask.emit(task);
  }

  OnToggle(task: Task){
    this.toggelReminder.emit(task);
  }
}
