import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  async login(userLogins: Login){
    let response = await fetch('http://localhost:7500/user/login/', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })
// console.log(response);

    const data = await response.json()
    console.log(data);
    
    let token = data.token

    localStorage.setItem('token', token)

    // console.log(token);
    

    return data
  }


}
