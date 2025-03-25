import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import  AuthService  from '../../services/auth-services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  onSubmit(): void {
    if(this.loginForm.valid) {
      const loginData: User = this.loginForm.value;
      this.authService.login(loginData).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
      
            if(response.role === 'customer' ) {
              this.router.navigate(['/customer']);
            } else if (response.role === 'admin') {
              this.router.navigate(['/admin']);
            } else if (response.role === 'mechanic'){
              this.router.navigate(['/mechanic']);
            } else {
              this.router.navigate(['/login']);
              console.log('this is an unknown profile')
            }
        },
        error: (error: any) => {
          console.error('Login failed', error);
        }
      });
    }
  }

}
