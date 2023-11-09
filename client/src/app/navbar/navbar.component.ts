import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor (private router: Router){}
  // loggedIn!:boolean

  loggedInTrue = localStorage.getItem('loggedIn')

  loggedIn = this.loggedInTrue

  ngOnInit(): void {
    // this.checkLoggedIn()
  }

  checkLoggedIn(){

    console.log(this.loggedInTrue);
    if(this.loggedInTrue == 'true'){
      // this.loggedIn = true
    }
  }

  Logout(){
    
    this.router.navigate([''])
    localStorage.clear()

    console.log(localStorage.getItem('token'));
    
  }

  date = new Date()

}
