import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userData: { username: string; email: string; password: string } = {
    username: '',
    email: '',
    password: '',
  };
  confirmPassword: string = '';
  usernameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  apiMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Add your form submission logic here, including API calls if needed
    // You can use the userData and confirmPassword properties for form data

    // After successful registration, you can redirect to the login page
    this.router.navigate(['/login']);
  }
}
