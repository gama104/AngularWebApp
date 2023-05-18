import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // Add this line
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signIn(): void {
    // Call the authentication service to sign in the user
    this.authService.signIn(this.username, this.password)
      .subscribe(
        response => {
          // Handle successful sign-in, such as storing the JWT token
        },
        error => {
          // Handle sign-in error, such as displaying an error message
        }
      );
  }
}
