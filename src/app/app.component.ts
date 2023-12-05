import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CreateMaintenancePageComponent } from './create-maintenance-page/create-maintenance-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent, NavbarComponent,CreateMaintenancePageComponent]
})
export class AppComponent {
  title = 'fonafe-front';

  constructor(private router: Router) {}

  shouldShowLayout(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/login';
  }

}
