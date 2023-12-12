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
  loading = false

  constructor(private authService: AuthService, private router: Router) { }
  login(form: any) {
    const { email, password } = form;
    if (email && password) {
      this.loading = true
      this.authService.signIn(email, password)
        .then(res => {
          this.loading = false
          // Handle the response
          this.router.navigate(["/home"])
        })
        .catch(err => {
          // Handle errors
        });
    }
  }
}
