import { Component} from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: [
  './gallery.component.css'
  ]
})
export class GalleryComponent {
  open: boolean = false;
  selectedImageNumber: number = 1;
  photoRange = [1, 2, 3, 4]; //if needed, can eventually convert this to [src] property binding
  //(property binding vs. interpolation)
  timerConstant: any;
  slideshowOn: boolean = false;
  authenticated: boolean = false;
  loggedOut: boolean;
  message: string;
  goodbye: string;

//build in a 'slideshow: ON or OFF' functionality
//build in a reset timer functionality if nextModal() is called while in a slideshow

  timerBlock() {
    if (!this.timerConstant) { //only go to the next slide once the timer is up.
    this.timerConstant = setTimeout( () => {    //use an arrow function so that 'this' is not captured in scope
        if (!this.slideshowOn) return;
        this.timerConstant = null;
        if (this.selectedImageNumber === (this.photoRange.length) ) {
          this.nextModal();
          this.closeModal();
          return;
        }
        this.nextModal();
        this.timerBlock();
      }, 5000);
    }
  }

  toggleSlideshow() {  //should try to replace this with an attribute directive
  if (this.slideshowOn) {
    this.slideshowOn = false;
    this.timerConstant = null; //reset timer for when slideshow is reactivated
  } else if (!this.slideshowOn) {
    this.slideshowOn = true;
    this.timerConstant = null;
    this.timerBlock();
    }
  }

  openModal(num: number): void{
    if (!this.open) {
      if (!this.selectedImageNumber) {
        this.selectedImageNumber = 1; //defaults to first image
      }
      this.selectedImageNumber = num;
      this.open = true;
    } else if (this.open) {
      return;
    }
  }

  closeModal(): void{
    if (this.open) {
      this.endSlideshow() //ensure slideshow does not continue in background
      this.open = false;
    } else if (!this.open) {
      return;
    }
  }

  nextModal(): void{
    if (this.open) {    //ignore if modal window is not open
      if (this.selectedImageNumber === (this.photoRange.length) ) { //at end of pictures
        this.selectedImageNumber = 1;
        return;
      }
    //this.endSlideshow(); bind this function manually to the click event
      this.selectedImageNumber += 1;
    }
  }

  prevModal(): void{
    if (this.open) {
      this.endSlideshow(); // can leave this here since slideshow does not run backwards
      if (this.selectedImageNumber === 1) {   //at first picture
      return;
      }
    this.selectedImageNumber -= 1;
    }
  }

  endSlideshow(): void {
    if (this.slideshowOn) { //turn off slide show when manually controlled
      this.slideshowOn = false; // timerBlock() will return null
    }
  }

  onSubmit(skeleton: string): void{
    this.loggedOut = false;
    if (skeleton === 'process.env.skeleton') {  //later, load an environment variable using a GET request / salt/hash
      this.message = null;
      this.authenticated = true;
    } else {
      this.authenticated = false;
      this.message = 'Password incorrect. Please try again.';
    }
  }

  logOut(): void{
    this.authenticated = false;
    this.loggedOut = true;
    this.goodbye = 'See you soon!';
  }

  clearAll(): void{
    this.message = null;
    this.authenticated = false;
    this.loggedOut = false;
    this.goodbye = null;
  }

}
