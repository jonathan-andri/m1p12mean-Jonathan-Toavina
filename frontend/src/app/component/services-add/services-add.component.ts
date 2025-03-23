import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/create-services/services.service';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-services-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services-add.component.html',
  styleUrl: './services-add.component.scss'
})
export class ServicesAddComponent {
  userForm!: FormGroup;
  newService: Service = {
    serviceName: '',
    serviceType: '',
    serviceDescription: '',
    serviceEstimatedPrice: 0,
    serviceEstimatedDuration: ''
  };
  constructor(private fb: FormBuilder, private servicesService: ServicesService){};

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', [Validators.required]],
    })
  }

  onSubmit(): void{
    if (this.userForm.valid){
      /* const newService: Service={
        name: this.userForm.value.name,
        type: this.userForm.value.category,
        description: this.userForm.value.description,
        price: this.userForm.value.price,
        duration: this.userForm.value.duration
      } */

      //Add the new service to the db
      this.servicesService.createService(this.newService).subscribe({
        next: () => console.log('Sent'),
        error: (err) =>console.error('Error while sending the data', err)
      })

      console.log('Ok', this.userForm.value);
      this.userForm.reset();
      this.showNotification();
    }else {
      console.log('Not ok');
    }
  }

  onReset(): void{
    this.userForm.reset()
  }

  showNotification() {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        this.displayNotification();
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            this.displayNotification();
          }
        });
      }
    } else {
      alert('Your browser does not support notifications.');
    }
  }

  private displayNotification() {
    new Notification('Success', {
      body: 'Customer added successfully!',
    });
  }
  
}
