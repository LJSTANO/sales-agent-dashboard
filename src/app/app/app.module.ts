import { Component } from '@angular/core';
import{RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <nav class="side-nav">
      <div class="logo">
        <img src="logo.png" alt="Logo">
        <span>My App</span>
      </div>
      <ul>
        <li class="nav-item" [routerLink]="['/dashboard']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a></li>
        <li class="nav-item" [routerLink]="['/schools']" routerLinkActive="active">Schools</a></li>
        <li class="nav-item" [routerLink]="['/invoices']" routerLinkActive="active">Invoices</a></li>
        <li class="nav-item" [routerLink]="['/collections']" routerLinkActive="active">Collections</a></li>

      </ul>
      <div class="footer">
        <p>&copy; 2023 My App</p>
      </div>
    </nav>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
  //imports:[RouterModule]
})
export class AppComponent {
}
