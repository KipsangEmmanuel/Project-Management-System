import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  createProjectForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      projectDescription: [''],
      dueDate: [''],
    });
  }

  ngOnInit(): void {
    // You can initialize any additional data or components here
  }

  onSubmit() {
    if (this.createProjectForm.valid) {
      const project_name = this.createProjectForm.get('projectName')?.value;
      const project_description =
        this.createProjectForm.get('projectDescription')?.value;
      const dueDate = this.createProjectForm.get('dueDate')?.value;

      const data = {
        project_name,
        project_description,
        dueDate,
      };

      // Example: Send data to a service to create the project
      // Replace this with your actual API endpoint
      // projectService.createProject(data).subscribe(
      //   (result) => {
      //     console.log('Success Message:', result.message);
      //     alert(result.message);
      //     this.router.navigate(['/admin']);
      //   },
      //   (error) => {
      //     console.error('Error Message:', error);
      //     alert('An error occurred while creating the project.');
      //   }
      // );
    }
  }
}
