import { Injectable } from '@angular/core';

@Injectable()
export class ResizeService {
  timeOut: any;
  timeoutConstant: any;


//will need to figure out scope so other functions outside of the throttler can be called i.e. for the navbutton or header.
//also there is a naming collision here (the timing constant) to figure out!

  throttledButton() {
  if (!this.timeOut) {
    this.timeOut = setTimeout(function() {
    this.timeOut = null;

    if (window.innerWidth < 800) {
      document.querySelector('.nav-button').className = "nav-button visible";
    } else if (window.innerWidth >= 800) {
      document.querySelector('.nav-button').className = "nav-button invisible";
      document.querySelector('.all').className = "all invisible"; //bug caught! cannot resolve this since the template
      //is bound to component logic.  need to figure out how to use angular events.
        }

      }, 66); // 66 ms = 15 times per second
    }
  }

  throttledHeader() {
  if (!this.timeoutConstant) {
    this.timeoutConstant = setTimeout(function() {
    this.timeoutConstant = null;

    if (window.innerWidth < 800) {
      document.querySelector('.header').className = "header invisible";
      document.querySelector('.small-header').className = "small-header visible";
    } else if (window.innerWidth >= 800) {
      document.querySelector('.header').className = "header visible";
      document.querySelector('.small-header').className = "small-header invisible";
    }

      }, 66); // 66 ms = 15 times per second
    }
  }

}
