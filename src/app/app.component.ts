import { Component, Input } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div class="front-page">
    <header-component></header-component>
    <router-outlet></router-outlet>
    <navbar-component></navbar-component>
    
  </div>
  `,
  styleUrls: [
  './app.component.css'
  ]
  })

export class AppComponent {
}
