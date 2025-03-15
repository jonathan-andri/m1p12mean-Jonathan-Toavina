import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-admin',
  imports: [ HeaderComponent, RouterOutlet ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  activeComponent: string = 'dashboard';

  showComponent(componentName: string){
    this.activeComponent = componentName;
  }
}
