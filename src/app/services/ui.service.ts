import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddToggle: boolean = false;
  private subject = new Subject();
  constructor() { }

  //we use subject: works as emitter(), return observable.
  //change toggle status.
  //any component using this service will effect any other component use the same.
  /*
   * in case we click on add btn, will change showAddToggle value, and any other component subscribe to that observable will be affected in same time, how is subject powerfull.
  */
  ToggleAddTask(): void {
    this.showAddToggle = !this.showAddToggle;
    this.subject.next(this.showAddToggle);
  }

  //call oobservable to return current toggle state.
  OnToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
