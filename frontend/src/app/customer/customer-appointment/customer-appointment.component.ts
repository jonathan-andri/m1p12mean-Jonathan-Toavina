import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../../component/search-bar/search-bar.component";
import { NewAppointmentFormComponent } from "../new-appointment-form/new-appointment-form.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from './customer-appointment.model';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';

@Component({
  selector: 'app-appointment',
  imports: [SearchBarComponent, NewAppointmentFormComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './customer-appointment.component.html',
  styleUrl: './customer-appointment.component.scss'
})
export class CustomerAppointmentComponent {
  constructor(private appointmentService: AppointmentService) {}
  isNewAppoForm : boolean = false;

  toggleAppoForm() {
    this.isNewAppoForm = !this.isNewAppoForm;
  }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments():void {
    this.appointmentService.getAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error) => {
        console.log('error fetching appointments', error)
      }
    );
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id);
  }
}
