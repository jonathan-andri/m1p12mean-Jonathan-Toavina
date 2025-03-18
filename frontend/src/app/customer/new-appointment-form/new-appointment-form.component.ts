import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';
import { Appointment } from '../customer-appointment/appointment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-appointment-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-appointment-form.component.html',
  styleUrl: './new-appointment-form.component.scss'
})
export class NewAppointmentFormComponent {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.fb.group({
      appoDesc: [''],
      appoDate: [''],
      appoHour: [''],
      appoNote: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = this.appointmentForm.value;
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
}