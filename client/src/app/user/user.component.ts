import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  projectData: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    this.getAssignedProject();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
    this.router.navigate(['/login']);
  }

  getAssignedProject() {
    // Implement your project retrieval logic here
    // Set the projectData based on the retrieved project details
  }

  markInProgress() {
    // Implement the logic to mark the project as 'In Progress'
  }

  markComplete() {
    // Implement the logic to mark the project as 'Complete'
  }
}
