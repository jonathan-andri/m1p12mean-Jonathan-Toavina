import { Component } from '@angular/core';
import { SearchBarComponent } from "../../component/search-bar/search-bar.component";
import { NewAppointmentFormComponent } from "../new-appointment-form/new-appointment-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  imports: [SearchBarComponent, NewAppointmentFormComponent, CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class CustomerAppointmentComponent {
  isNewAppoForm : boolean = false;

  toggleAppoForm() {
    this.isNewAppoForm = !this.isNewAppoForm;
  }
}
