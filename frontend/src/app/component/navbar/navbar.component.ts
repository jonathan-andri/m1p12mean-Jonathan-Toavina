import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  //verification si scroll donc changement du 
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0 ;
  }

  ngOnInit(): void {
    this.onWindowScroll;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId) ;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }) ;
    }
  }

  @Output() loginClicked = new EventEmitter<void>() ;

  onLoginClick() {
    this.loginClicked.emit()
  }
}
