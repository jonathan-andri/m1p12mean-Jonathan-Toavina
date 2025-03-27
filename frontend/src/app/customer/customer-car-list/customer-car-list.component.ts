import { Component } from '@angular/core';
import { NewCarFormComponent } from "./new-car-form/new-car-form.component";
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car-services/car.service';
import { Car } from '../../models/Car';
import AuthService from '../../services/auth-services/auth.service';

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
  cars: Car[] = [];
  user: any;


  constructor(
    private carService: CarService,
    private authService: AuthService
  ){}
  toggleCarForm(): void {
    this.isCarForm = !this.isCarForm;
  }

  ngOnInit(): void {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    if (token) {
      this.authService.getUserData(token).subscribe({
        next: (response: any) => {
          this.user = response;
          if(this.user?._id) {
            this.loadCars();
          }
          console.log('car-list', response);
        },
        error: (error: any) => {
          console.error('Error fetching user data', error);
        }
      })
    }
    else {
      console.warn('no token found in localstorage');
    }
  }
  

  loadCars(): void {
    if (!this.user) return;
    console.log('user id',this.user._id);
    this.carService.getCarsByCustomer(this.user._id).subscribe(
      (data: Car[] ) => {
        this.cars = data;
        console.log('customer cars',this.cars);
      },
      (error) => {
        console.log('error fetching cars', error);
      }
    );
  }
}
