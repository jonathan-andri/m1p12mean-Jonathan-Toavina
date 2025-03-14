import { Component, Output, EventEmitter } from '@angular/core';

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
}
