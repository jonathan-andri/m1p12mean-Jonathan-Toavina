import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CalendarComponent } from '../../component/calendar/calendar.component'; 

@Component({
  selector: 'app-dashboard',
  imports:[ RouterLink, RouterLinkActive, CalendarComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
