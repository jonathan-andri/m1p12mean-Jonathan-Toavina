import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CalendarComponent } from '../../component/calendar/calendar.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports:[ RouterLink, RouterLinkActive, CalendarComponent,CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{
  currentDate: string = '';

  ngOnInit(): void {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // Ensures two digits
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-based)
    const year = today.getFullYear(); // Get the current year

    this.currentDate = `${day}/${month}/${year}`; // Format date as 'dd/mm/yyyy'
  }
}
