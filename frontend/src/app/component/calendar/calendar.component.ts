import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-calendar',
    imports: [ CommonModule ],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})

export class CalendarComponent{
    daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  calendarData: { [key: string]: number[] } = {};

  
  
}