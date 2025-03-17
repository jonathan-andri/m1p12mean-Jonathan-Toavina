import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-user',
  templateUrl: './last-user.component.html',
  styleUrls: ['./last-user.component.scss'],
  imports: [ CommonModule ]
})
export class LastUserComponent implements OnInit {
  // Mock data for the latest users
  latestUsers: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-10-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-10-02' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2023-10-03' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', joinDate: '2023-10-04' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', joinDate: '2023-10-05' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Sort users by joinDate in descending order (newest first)
    this.latestUsers.sort((a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime());
  }
}