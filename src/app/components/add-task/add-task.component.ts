import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/ITask';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean;
  showAddToggle: boolean;
  subsciption: Subscription;
  constructor(private uiService: UiService) {
    this.subsciption = this.uiService.OnToggle().subscribe((value) => this.showAddToggle = value);
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    if (!this.text) {
      alert("Must Add Task");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.addTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}
