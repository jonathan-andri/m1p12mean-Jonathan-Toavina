import { Component } from '@angular/core';
import { NewCarFormComponent } from "./new-car-form/new-car-form.component";
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car-services/car.service';
import { Car } from '../../models/Car';

@Component({
  selector: 'app-customer-car-list',
  imports: [
    NewCarFormComponent,
    CommonModule
  ],
  templateUrl: './customer-car-list.component.html',
  styleUrl: './customer-car-list.component.scss'
})
export class CustomerCarListComponent {
  isCarForm : boolean = false;
  cars: Car[] = []


  constructor(
    private carService: CarService
  ){}
  toggleCarForm(): void {
    this.isCarForm = !this.isCarForm;
  }

  ngOnInit(): void {
    this.loadCars();
    
  }
  loadCars(): void {
    this.carService.getCars().subscribe(
      (data: Car[] ) => {
        this.cars = data;
      },
      (error) => {
        console.log('error fetching cars', error);
      }
    );
  }
}
