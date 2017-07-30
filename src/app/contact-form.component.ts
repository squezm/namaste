import { Component, AfterViewInit } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.css'
  ]
})
export class ContactFormComponent implements AfterViewInit {

  experience = [
  'Beginner',
  'Prior student',
  'Guru'
  ];

  //model = new Contact(1, 'Dex', 'dexter_douglas@gmail.com', this.experience[2], true);
  model = new Contact(1, '', '', '', '', '');

  submitted = false;

//submit a post request here to a backend, which will send an email with the submitted data
//or save it to a database.
  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.model);
  }

  newContact() {
    this.model = new Contact(40, '', '', '', '');
  }

  edit() {
    this.submitted = false;
  }

  getDiagnostic() {
    return JSON.stringify(this.model);
  }

  ngAfterViewInit() {
    //window.alert(this.model.name);
  }
}
