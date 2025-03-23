import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MechanicService } from '../../services/add-mechanic/mechanic.service';
import { Mechanic } from '../../models/mechanic';
@Component({
  selector: 'app-mechanic-add',
  imports: [ CommonModule,ReactiveFormsModule ],
  templateUrl: './mechanic-add.component.html',
  styleUrl: './mechanic-add.component.scss'
})
export class MechanicAddComponent {
  userForm!: FormGroup;
  newMechanic!: Mechanic

  constructor(private fb: FormBuilder, private mechanicService: MechanicService){};

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
      this.newMechanic ={
        FirstName: this.userForm.value.firstName,
        LastName: this.userForm.value.lastName,
        email: this.userForm.value.email,
        phone: this.userForm.value.phoneNumber,
        role: 'mechanic',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: this.userForm.value.password,
      }
      //add the new mechanic in the db
      this.mechanicService.addMechanic(this.newMechanic).subscribe({
        next:() =>{
          console.log('Ok', this.userForm.value);
          this.userForm.reset();
          this.showNotification();
        },
        error: err => console.error('Error here:', err)
      });

      
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
