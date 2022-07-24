import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  showAddToggle: boolean;
  subscription: Subscription;

  constructor(private uiSerivce: UiService, private router: Router) {
    this.subscription = uiSerivce.OnToggle().subscribe(
      (value) => this.showAddToggle = value
    )
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiSerivce.ToggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
