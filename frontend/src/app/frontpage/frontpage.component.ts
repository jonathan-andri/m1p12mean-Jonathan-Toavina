import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";

@Component({
  selector: 'app-frontpage',
  imports: [HeaderComponent, Section1Component, Section2Component],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {

}
