import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: { email: string; password: string } = { email: '', password: '' };
  emailError: string = '';
  passwordError: string = '';
  apiMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Add your form submission logic here, including API calls if needed
    // You can use the userData property for form data

    // After successful login, you can redirect to the appropriate page (admin or user)
    // Implement the logic similar to the 'redirect' function in your original code

    // Example of a redirect to 'user' page:
    this.router.navigate(['/user']);
  }
}
