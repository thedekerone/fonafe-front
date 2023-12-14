import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  loading = false;
  errorMessage = ''; // Property to store the error message

  constructor(private authService: AuthService, private router: Router) { }

  login(form: any) {
    const { email, password } = form;
    if (email && password) {
      this.loading = true;
      this.authService.signIn(email, password)
        .then(res => {
          this.loading = false;
          this.router.navigate(["/"]);
        })
        .catch(err => {
          this.loading = false;
          this.errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.'; // Set the error message
        });
    }
  }
}

