import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mechanic-add',
  imports: [ CommonModule,ReactiveFormsModule ],
  templateUrl: './mechanic-add.component.html',
  styleUrl: './mechanic-add.component.scss'
})
export class MechanicAddComponent {
  userForm!: FormGroup;
  
  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.pattern(/^\d{3} \d{2} \d{3} \d{2}$/)],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void{
    if (this.userForm.valid){
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
