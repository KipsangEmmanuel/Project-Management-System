import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent implements OnInit {
  updateProjectForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.updateProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      projectDescription: [''],
      dueDate: [''],
    });
  }

  ngOnInit(): void {
    // You can initialize any additional data or components here
  }

  onSubmit() {
    if (this.updateProjectForm.valid) {
      const project_name = this.updateProjectForm.get('projectName')?.value;
      const project_description =
        this.updateProjectForm.get('projectDescription')?.value;
      const dueDate = this.updateProjectForm.get('dueDate')?.value;

      // You can get the project_id from your route or any other source
      const project_id = 'your_project_id_value';

      const data = {
        project_id,
        project_name,
        project_description,
        dueDate,
      };

      // Example: Send data to a service to update the project
      // Replace this with your actual API endpoint
      // projectService.updateProject(data).subscribe(
      //   (result) => {
      //     console.log('Success Message:', result.message);
      //     alert(result.message);
      //     this.router.navigate(['/admin']);
      //   },
      //   (error) => {
      //     console.error('Error Message:', error);
      //     alert('An error occurred while updating the project.');
      //   }
      // );
    }
  }
}
