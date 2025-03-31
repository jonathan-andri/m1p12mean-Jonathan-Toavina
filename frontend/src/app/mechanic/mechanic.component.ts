import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/customer-services/customer-appointment-services/appointment.service';
import { AuthService } from '../services/auth-services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mechanic',
  imports: [CommonModule],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.scss'
})
export class MechanicComponent implements OnInit{

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService
  ){}

  appointments: any[] = [];

  ngOnInit(): void {
    this.getMechanicAppointment()
  }

  getMechanicAppointment(){
    const mechanicId = this.authService.getMechanicId();
    console.log(mechanicId)
    if (typeof mechanicId === 'string')
      this.appointmentService.getMechanicAppointments(mechanicId).subscribe(data => this.appointments = data)
    else{
      console.log('Errrrrrooooooorrrr')
    }
  }
}
