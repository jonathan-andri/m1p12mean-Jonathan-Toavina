import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {
  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      time: '8:30'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      time: '16:00'
    }
  ];

  isEditModalOpen = false;
  isDeleteModalOpen = false;
  selectedUser: any = null;

  
  openEditModal(user: any) {
    this.selectedUser = { ...user }; // Create a copy of the user object
    this.isEditModalOpen = true;
  }

  
  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedUser = null;
  }

  onSubmit() {
    const index = this.users.findIndex(u => u.id === this.selectedUser.id);
    if (index !== -1) {
      this.users[index] = { ...this.selectedUser };
    }

    // Send the updated data to your backend/database here
    console.log('Updated User:', this.selectedUser);
    this.closeEditModal();
  }

  openDeleteModal(user: any) {
    this.selectedUser = { ...user }
    this.isDeleteModalOpen = true
  }

  closeDeleteModal(){
    this.isDeleteModalOpen = false
    this.selectedUser = null
  }

  delete(){
    console.log('deleted')
    this.isDeleteModalOpen = false
  }
}
