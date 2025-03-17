import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  imports: [],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {

  @Output() crossClicked = new EventEmitter<void>();

  onCrossClick() {
    this.crossClicked.emit();
  }



  constructor(private router: Router) {}

  onSignUpClick() {
    this.router.navigate(['/signup-page']);
  }
}
