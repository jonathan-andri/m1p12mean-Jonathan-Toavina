import { Component } from '@angular/core';
import { SearchBarComponent } from "../../component/search-bar/search-bar.component";
import { NewAppointmentFormComponent } from "../new-appointment-form/new-appointment-form.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from './appointment.model';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';

@Component({
  selector: 'app-appointment',
  imports: [SearchBarComponent, NewAppointmentFormComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class CustomerAppointmentComponent {
  constructor(private appointmentService: AppointmentService) {}
  isNewAppoForm : boolean = false;

  toggleAppoForm() {
    this.isNewAppoForm = !this.isNewAppoForm;
  }

  appointments: Appointment[] = [];

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
}
