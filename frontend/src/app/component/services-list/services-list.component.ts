import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../services/create-services/services.service';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-services-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent implements OnInit{

  constructor( private serviceService: ServicesService){}

  isEditModalOpen = false;
  isDeleteModalOpen = false;
  selectedService: any = null;
  services: Service[] = [] ;
  id!: string;

  ngOnInit(): void {
    this.loadServices()  ;
  }
  openEditModal(service: Service) {
    this.selectedService = { ...service }; // Create a copy of the Service object
    this.isEditModalOpen = true;
  }

  
  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedService = null;
  }

  onSubmit() {
    
    // Send the updated data to your backend/database here
    console.log('Updated Service:', this.selectedService);
    this.closeEditModal();
  }

  openDeleteModal(service: Service) {
    this.selectedService = { ...service }
    this.isDeleteModalOpen = true
    this.id = this.selectedService.id
    console.log(this.id)
  }

  closeDeleteModal(){
    this.isDeleteModalOpen = false
    this.selectedService = null
  }

  deleteService(){
    this.serviceService.deleteService(this.id).subscribe({
      next: () => {
        console.log('deleted')
        this.isDeleteModalOpen = false;
        this.loadServices();
      },
      error: (err) => console.log('Error while deleting', err)
    })
    
  }

  loadServices(): void{
    this.serviceService.getAllServices().subscribe(data => this.services = data)
  }
}
