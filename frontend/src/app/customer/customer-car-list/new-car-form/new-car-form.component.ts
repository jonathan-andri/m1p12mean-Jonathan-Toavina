import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../../services/car-services/car.service';
import { Car } from '../../../models/Car';
import AuthService from '../../../services/auth-services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-car-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-car-form.component.html',
  styleUrl: './new-car-form.component.scss'
})
export class NewCarFormComponent implements OnInit{
  carForm: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private authService: AuthService
  ) {
    this.carForm = this.fb.group({
      customerId: '', // Set initially as empty
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      licensePlate: ['', Validators.required],
      vin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //code to get the user data
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    if (token) {
      this.authService.getUserData(token).subscribe({
        next: (response: any) => {
          this.user = response;
          console.log('in add car: ', response.firstName);
          this.carForm = this.fb.group({
            customerId: this.user._id,
            brand: ['',Validators.required],
            model: ['',Validators.required],
            year: ['',Validators.required],
            licensePlate: ['',Validators.required],
            vin: ['',Validators.required],
          })
      
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

  
  onSubmit() {
    if(this.carForm.valid) {
      const newCar: Car = this.carForm.value;

      this.carService.createCar(newCar).subscribe(
        response => {
          console.log('Car added succesfully:', response);
          this.carForm.reset();
        },
        error => {
          console.error('Error adding car', error);
          console.log(newCar);
        }
      )
    }
  }
}
