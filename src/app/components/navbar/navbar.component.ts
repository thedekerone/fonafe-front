import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn = false
  showMenu = false;

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;
      console.log(user)
      // Additional logic based on authentication state
    });
  }

  handleClick(): void {
    this.showMenu = !this.showMenu;
  }
  logout() {
    this.authService.signOut().then(() => {
      // Redirect to login or home page after logout
      this.router.navigate(['/login']);
    }).catch((error) => {
      // Handle logout errors here
      console.error('Logout error:', error);
    });
  }
}
