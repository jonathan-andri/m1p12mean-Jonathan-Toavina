import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports : [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weeks: (Date | null)[][] = [];
  events: { [key: string]: number } = {}; // Example: { '2023-10-05': 3 }
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  today: Date = new Date();

  ngOnInit(): void {
    this.generateCalendar(new Date().getFullYear(), new Date().getMonth());
    this.mockEvents(); // Mock some events for demonstration
  }

  isToday(date: Date): boolean {
    return (
      date.getDate() === this.today.getDate() &&
      date.getMonth() === this.today.getMonth() &&
      date.getFullYear() === this.today.getFullYear()
    );
  }
  // Generate the calendar grid for a given year and month
  generateCalendar(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)
    const daysInMonth = lastDayOfMonth.getDate();

    let dayCount = 1;
    this.weeks = [];

    for (let week = 0; week < 6; week++) {
      const days: (Date | null)[] = [] ; 
      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < startDay) || dayCount > daysInMonth) {
          days.push(null); // Empty day (not part of the current month)
        } else {
          days.push(new Date(year, month, dayCount));
          dayCount++;
        }
      }
      this.weeks.push(days);
      if (dayCount > daysInMonth) break; // Stop if we've added all days
    }
  }

  // Mock some events for demonstration
  mockEvents(): void {
    this.events['2025-03-17'] = 3;
    this.events['2025-03-20'] = 1;
    this.events['2025-03-23'] = 5;
  }

  // Get the number of events for a specific date
  getEventCount(date: Date): number {
    const key = date.toISOString().split('T')[0]; // Convert date to 'YYYY-MM-DD' format
    return this.events[key] || 0;
  }
}