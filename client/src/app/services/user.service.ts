import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  async checkDetails(){
    let token = localStorage.getItem('token') as string
    let res = await fetch('http://localhost:7500/user/check_user_details',{
      headers:{
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await res.json()

    let role = data.info.role
    console.log(role);
    

    return role
  }
}
