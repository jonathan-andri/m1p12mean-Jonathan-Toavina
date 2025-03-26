import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuthService from '../../services/auth-services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-services/user.service';

@Component({
  selector: 'app-navbar-customer',
  imports: [CommonModule],
  templateUrl: './navbar-customer.component.html',
  styleUrl: './navbar-customer.component.scss'
})
export class NavbarCustomerComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ){}

  isDropdownVisible: boolean = false;
  isMenuVisible: boolean = false;
  user: any;

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
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.authService.getUserData().subscribe({
      next: (userData: any) => {
        this.user = userData;
        console.log('response is'+ userData);
      }
    })
  }
}
