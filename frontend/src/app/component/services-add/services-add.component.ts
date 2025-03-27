import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/create-services/services.service';
import { Service } from '../../models/Service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-services-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services-add.component.html',
  styleUrl: './services-add.component.scss'
})

export class ServicesAddComponent {

  userForm!: FormGroup;
  newService: Service = {
    _id:'',
    serviceName: '',
    serviceType: '',
    serviceDescription: '',
    serviceEstimatedPrice: 0,
    serviceEstimatedDuration: ''
  };
  constructor(private fb: FormBuilder, private servicesService: ServicesService, private cdr: ChangeDetectorRef){};

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
      //Add the new service to the db
      this.servicesService.createService(this.newService).subscribe({
        next: () => {
          
          this.userForm.reset();
          this.showNotification();
          this.cdr.detectChanges();
          console.log('Saved');
        },
        error: (err) =>console.error('Error while sending the data', err)
      })
      
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
