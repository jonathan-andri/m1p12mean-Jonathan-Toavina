import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Garazy';
  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration (1s)
      easing: 'ease-in-out', // Smooth transition
      once: true // Animates only once when scrolling down
    });
  }
}
