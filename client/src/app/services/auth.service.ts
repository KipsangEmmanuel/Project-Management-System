import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserDetails } from '../interfaces/user';
// import { Employee, EmployeeDetails } from '../interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  getUsers(){
    let token = localStorage.getItem('token') as string
    return this.http.get('http://localhost:7500/user/', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    })

    // console.log(res);
    
  }

  createUser (user: UserDetails){
    return this.http.post('http://localhost:7500/user/register', user).subscribe(res=>{
      console.log(res);
      
    })
  }
  
}