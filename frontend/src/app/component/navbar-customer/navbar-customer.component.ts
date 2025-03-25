import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuthService from '../../services/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  imports: [CommonModule],
  templateUrl: './navbar-customer.component.html',
  styleUrl: './navbar-customer.component.scss'
})
export class NavbarCustomerComponent {

  constructor(
    private authservice: AuthService,
    private router: Router
  ){}

  isDropdownVisible: boolean = false;
  isMenuVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleMenu() {
    const menu :HTMLElement | null = document.querySelector('#customer-navbar');
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1000) {
      if (menu && !this.isMenuVisible ) {
        menu.style.transform = 'translateX(0%)';
        this.isMenuVisible = true;
      }
  
      else if ( menu && this.isMenuVisible) {
        menu.style.transform = 'translateX(-95%)';
        this.isMenuVisible = false;
      }
    }
   
  }

  onLogout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
}
