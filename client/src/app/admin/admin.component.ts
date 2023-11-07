// admin.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // Define any necessary properties and methods here
  // You can adapt the logic from the provided TypeScript code

  ngOnInit() {
    // Implement the component initialization logic here
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // This ensures that the function returns a boolean value
  }

  logoutUser() {
    // Implement the logic to log out the user
  }

  fetchProjects() {
    // Implement the logic to fetch projects from the API
    // Populate the project cards in the template
  }

  fetchUsers() {
    // Implement the logic to fetch users from the API
    // Populate the user list in the template
  }

  createNewProject() {
    // Implement the logic to navigate to the create project page
  }

  // Implement other methods as needed based on the provided TypeScript code
}
