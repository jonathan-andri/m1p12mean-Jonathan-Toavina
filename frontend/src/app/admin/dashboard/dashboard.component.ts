import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CalendarComponent } from '../../component/calendar/calendar.component'; 
import { CommonModule } from '@angular/common';
import { LastUserComponent } from '../../component/last-user/last-user.component';
import { TopEmployeeComponent } from '../../component/top-employee/top-employee.component';

@Component({
  selector: 'app-dashboard',
  imports:[ RouterLink, RouterLinkActive, CalendarComponent,CommonModule, LastUserComponent, TopEmployeeComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{
  currentDate: string = '';

  ngOnInit(): void {
    const today = new Date();
  
    this.currentDate = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
