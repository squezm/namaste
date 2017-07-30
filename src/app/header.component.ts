import { Component, AfterViewInit, OnInit } from '@angular/core';

import { ResizeService } from './resize.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: [
  './header.component.css'
  ],
  providers: [
  ResizeService
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private resize: ResizeService
  ) { }

  ngOnInit() {
    if (window.innerWidth >= 800) {
      document.querySelector('.header').className = "header visible";
      document.querySelector('.small-header').className = "small-header invisible";
    }
    if (window.innerWidth < 800) {
      document.querySelector('.small-header').className = "small-header visible";
    }
  }

  ngAfterViewInit() {
  //need to lookup NPM modules for components to bind to window resize events
    window.addEventListener('resize', this.resize.throttledHeader);
  }

}
