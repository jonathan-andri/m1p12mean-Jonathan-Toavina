import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services-add.component.html',
  styleUrl: './services-add.component.scss'
})
export class ServicesAddComponent {
  userForm!: FormGroup;
  
  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      vehicle: ['', Validators.required],
      price: ['', Validators.required],
      duration: ['', [Validators.required]],
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
