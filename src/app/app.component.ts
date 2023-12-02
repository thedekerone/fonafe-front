import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fonafe-front';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    // Obtén la ruta actual y decide si mostrar o no el navbar
    const currentRoute = this.router.url;
    return currentRoute !== '/login'; // Muestra el navbar en todas las rutas excepto '/login'
  }
}
