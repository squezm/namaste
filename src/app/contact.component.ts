import { Component } from '@angular/core';

@Component ({
  selector: 'contact-component',
  template: `
  <h3>Reach out</h3>
    <div class="wrapper">
      <p>
        <contact-form></contact-form>
      </p>
    </div>
    `,
  styleUrls: [
  './contact.component.css'
  ]
})
export class ContactComponent {

}
