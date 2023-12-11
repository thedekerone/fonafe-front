import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {


  constructor(private authService: AuthService, private router: Router) { }
  login(form: any) {

    const { email, password } = form;
    if (email && password) {
      this.authService.signIn(email, password)
        .then(res => {
          // Handle the response
          this.router.navigate(["/home"])
        })
        .catch(err => {
          // Handle errors
        });
    }
  }
}
