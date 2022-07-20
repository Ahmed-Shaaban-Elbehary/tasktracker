import { Injectable } from '@angular/core';
import { Tasks } from './../../mock-tasks';
import { Task } from 'src/ITask';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]> {
    return of(Tasks);
  }
}
