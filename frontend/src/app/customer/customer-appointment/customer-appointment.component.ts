import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../../component/search-bar/search-bar.component";
import { NewAppointmentFormComponent } from "../new-appointment-form/new-appointment-form.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from './customer-appointment.model';
import { AppointmentService } from '../../services/customer-services/customer-appointment-services/appointment.service';
import { AuthService } from '../../services/auth-services/auth.service';
import { ServicesService } from '../../services/create-services/services.service';
import { CarService } from '../../services/car-services/car.service';

@Component({
  selector: 'app-appointment',
  imports: [SearchBarComponent, NewAppointmentFormComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './customer-appointment.component.html',
  styleUrl: './customer-appointment.component.scss'
})
export class CustomerAppointmentComponent {
  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private serviceService: ServicesService,
    private carservice: CarService
  ) {}
  isNewAppoForm : boolean = false;
  user: any ;
  toggleAppoForm() {
    this.isNewAppoForm = !this.isNewAppoForm;
  }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    const token = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('token') : null;
    if (token) {
      this.authService.getUserData(token).subscribe({
        next: (response: any) => {
          this.user = response;
          if(this.user?._id) {
            this.loadAppointments();
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

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data.filter(dt => dt.customerId == this.user._id);
  
        // Fetch service names for each appointment
        this.appointments.forEach(appointment => {
          this.serviceService.getById(appointment.serviceId).subscribe(
            (service) => {
              appointment.serviceId = service.serviceName; 
              
              // i fetch car license plate
              this.carservice.getCarById(appointment.carId).subscribe(
                (car) => {
                  appointment.carId = car.licensePlate;
                },
                (error) => {
                  console.log('Error fecthing car for ID in customer appointment view', error);
                }
              )
            },
            (error) => {
              console.log(`Error fetching service for ID ${appointment.serviceId}`, error);
            }
          );
        });
      },
      (error) => {
        console.log('Error fetching appointments', error);
      }
    );
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id);
  }
}
