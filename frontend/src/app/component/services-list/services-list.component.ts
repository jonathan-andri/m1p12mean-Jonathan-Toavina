import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor( private serviceService: ServicesService, private cdr: ChangeDetectorRef){}

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
    this.id = this.selectedService.id || this.selectedService._id
  }

  
  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedService = null;
    this.cdr.detectChanges()
  }

  onEdit() {
    
    // Send the updated data to the backend/database
    this.editService()
    console.log('Updated Service:', this.selectedService);
    this.cdr.detectChanges()
    this.closeEditModal();
  }
  
  editService(){
    this.serviceService.updateService(this.id, this.selectedService).subscribe({
      next: () => {
        this.loadServices()
      },
      error: (err) => console.log('Error while editing', err)
    })
  }


  openDeleteModal(service: Service) {
    this.selectedService = { ...service }
    this.isDeleteModalOpen = true
    this.id = this.selectedService.id || this.selectedService._id
    console.log(this.id)
  }

  closeDeleteModal(){
    this.isDeleteModalOpen = false
    this.selectedService = null
  }

  deleteService(){
    this.serviceService.deleteService(this.id).subscribe({
      next: () => {
        this.isDeleteModalOpen = false;
        this.loadServices();
        console.log('Service deleted');
      },
      error: (err) => console.log('Error while deleting', err)
    })
    
  }


  loadServices(): void{
    this.serviceService.getAllServices().subscribe(data => this.services = data)
  }
}
