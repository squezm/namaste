import {
  Component,
  AfterViewInit,
  OnInit
   } from '@angular/core';

import { ResizeService } from './resize.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: [
  './navbar.component.css'
  ],
  providers: [
  ResizeService
  ]
})
export class NavbarComponent implements AfterViewInit{
//rebuild this component using attribute directives

  navigation: boolean = false;
  hiding: boolean = false;

  constructor(
    private resize: ResizeService
  ) { }

  click(): void{
    if (!this.navigation) {
      this.navigation = true;
      if (this.hiding) { //catch for multiple cycles
        this.hiding = false;
      }
    } else if (this.navigation) { //navigation panel is showing when nav button tapped
      this.navigation = false; //now invisible
      this.hiding = true;
    }
  }

  ngOnInit() {
  // figure out how to use angular for resize events on the "window" DOM element.
  // eventually call this from the resizing service once I figure out function calls/scope
    if (window.innerWidth < 800) {
      document.querySelector('.nav-button').className = "nav-button visible";
    } else if (window.innerWidth >= 800) {
      document.querySelector('.nav-button').className = "nav-button invisible";
    }
  }

  ngAfterViewInit() {
  // figure out how to use angular for resize events on the "window" DOM element.
  window.addEventListener('resize', this.resize.throttledButton);
  }

}
