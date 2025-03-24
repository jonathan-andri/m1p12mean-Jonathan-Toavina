import { Component,ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MechanicService } from '../../services/add-mechanic/mechanic.service';
import { Mechanic } from '../../models/mechanic';

@Component({
  selector: 'app-mechanics-list',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './mechanics-list.component.html',
  styleUrl: './mechanics-list.component.scss'
})
export class MechanicsListComponent implements OnInit {
  
  constructor(private mechanicService: MechanicService, private cdr: ChangeDetectorRef){}

  isEditModalOpen = false;
  isDeleteModalOpen = false;
  selectedMechanic: any = null;
  mechanics: Mechanic[] = [] 
  id!: string

  ngOnInit(): void {
    this.loadMechanics();
  }
  openEditModal(mechanic: Mechanic) {
    this.selectedMechanic = { ...mechanic }; // Create a copy of the user object
    this.isEditModalOpen = true;
    this.id = this.selectedMechanic.id || this.selectedMechanic._id
   
  }

  
  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedMechanic = null;
    this.cdr.detectChanges();
  }

  onSubmit() {
    // Send the updated data to your backend/database here
    this.editMechanic();
    console.log('Updated Mechanic:', this.selectedMechanic);
    this.cdr.detectChanges()
    this.closeEditModal();
  }

  editMechanic(){
    this.mechanicService.updateMechanic(this.selectedMechanic,this.id).subscribe({
      next: () =>{
        this.loadMechanics()
      },
      error: (err) => console.error('While editing mechanic', err)
    })
  }
  openDeleteModal(mechanic: Mechanic) {
    this.selectedMechanic = { ...mechanic }
    this.isDeleteModalOpen = true
  }

  closeDeleteModal(){
    this.isDeleteModalOpen = false
    this.selectedMechanic = null
  }

  deleteMechanic(){
    this.mechanicService.deleteMechanic(this.id).subscribe({
      next: () =>{
        this.isDeleteModalOpen = false;
        this.loadMechanics();
        console.log('Mechanic deleted');
      },
      error: (err) => console.error('Error while editing', err)
    })
  }

  loadMechanics(){
    this.mechanicService.getAllMechanics().subscribe(data => this.mechanics = data)
  }
}
