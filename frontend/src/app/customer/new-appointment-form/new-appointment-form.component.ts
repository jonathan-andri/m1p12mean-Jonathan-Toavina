import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';
import { Appointment } from '../customer-appointment/customer-appointment.model';
import { CommonModule } from '@angular/common';
import AuthService from '../../services/auth-services/auth.service';

@Component({
  selector: 'app-new-appointment-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-appointment-form.component.html',
  styleUrl: './new-appointment-form.component.scss'
})
export class NewAppointmentFormComponent implements OnInit{
  appointmentForm: FormGroup;
  minDate: string ='';
  user: any;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private authService: AuthService
  ) {
    this.appointmentForm = this.fb.group({
      appoServ: ['', Validators.required],
      appoDate: ['', Validators.required],
      appoNote: ['', Validators.required],
    });

    this.setMinDate();
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = {
        ...this.appointmentForm.value,
        customerId: this.user?._id,
        mechanicId: '65e4fa10a985851c54cd8500',
        carId: '65e4fa10a985851c54cd8511',
        serviceId: '65e4fa10a985851c54cd8522',
        appoPriceEstimate: 10,
        appoActualPrice: 100
      }

      this.appointmentService.createAppointment(newAppointment).subscribe(
        response => {
          console.log('Appointment created successfully:', response);
          this.appointmentForm.reset();
        },
        error => {
          console.error('Error creating appointement', error);
        }
      );
    }
  }

  setMinDate(){
    const today = new Date();
    today.setDate(today.getDate() + 1);
    this.minDate = today.toISOString().slice(0, 16);
  }

  ngOnInit(): void {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    if (token) {
      this.authService.getUserData(token).subscribe({
        next: (response: any) => {
          this.user = response;
          console.log('in new appointemnt: ', response._id)
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
}
