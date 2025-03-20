import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
  users = [
    {
      id: 1,
      name: 'Oil Change',
      category: 'Routine Maintenance',
      vehicle: 'Compact',
      price: '700 000',
      duration: '2h'
    },
    {
      id: 2,
      name: 'Transmission Repair',
      category: 'Repair',
      vehicle: 'All',
      price: '900 000',
      duration: '4h'
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
