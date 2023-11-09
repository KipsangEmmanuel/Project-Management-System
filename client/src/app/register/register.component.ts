import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../interfaces/user';
import { APIService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerUser!: FormGroup
  constructor(private auth: APIService, private router: Router, private fb: FormBuilder){
this.registerUser = this.fb.group({
  username: ['', [Validators.required]], 
  email: ['', [Validators.required]],
  password: ['', [Validators.required]]
})

}
createUser(){
let registeredUser: UserDetails = this.registerUser.value
this.auth.createUser(registeredUser)
this.router.navigate(['login'])
}
}
