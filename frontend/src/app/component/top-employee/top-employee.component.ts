import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Count } from '../../models/count';
import { CountService } from '../../services/count-services/count.service';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-top-employee',
  imports: [ CommonModule ],
  templateUrl: './top-employee.component.html',
  styleUrls: ['./top-employee.component.scss']
})
export class TopEmployeeComponent implements OnInit {

  constructor( 
    private countService: CountService, 
    private appointmentService: AppointmentService
  ) {}

  counts: any[] = [];
  appointments: Appointment[] = []

  ngOnInit(): void {
    this.getData()
    console.log(this.appointments)
  }

  getData(){
    this.countService.get().subscribe(data => this.counts = data);
    this.appointmentService.getAppointments().subscribe(data => {
    this.appointments = data;
    this.appointments = this.appointments.filter(data => data.appoStatus == 'Completed')
    })
  }
}