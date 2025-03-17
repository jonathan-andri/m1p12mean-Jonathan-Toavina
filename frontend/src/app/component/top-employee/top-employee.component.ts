import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-employee',
  imports: [ CommonModule ],
  templateUrl: './top-employee.component.html',
  styleUrls: ['./top-employee.component.css']
})
export class TopEmployeeComponent implements OnInit {
  // Mock data for employees and their service counts
  employees: any[] = [
    { id: 1, name: 'John Doe', serviceCount: 15 },
    { id: 2, name: 'Jane Smith', serviceCount: 22 },
    { id: 3, name: 'Alice Johnson', serviceCount: 18 },
    { id: 4, name: 'Bob Brown', serviceCount: 25 },
    { id: 5, name: 'Charlie Davis', serviceCount: 20 }
  ];

  topEmployee: any; // Variable to store the top employee

  constructor() {}

  ngOnInit(): void {
    // Find the employee with the most services
    this.topEmployee = this.employees.reduce((prev, current) =>
      prev.serviceCount > current.serviceCount ? prev : current
    );
  }
}