import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../interfaces/project';
// import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserDetails } from '../interfaces/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  
})

export class AdminComponent implements OnInit{

  createProjectForm!: FormGroup
  isFormVisible: boolean = false; 
  projects!: Project[];
  users!: UserDetails[];


  constructor(private projectservice: ProjectService, private userService :UserService, private formBuilder:FormBuilder,private router: Router){

    this.createProjectForm=this.formBuilder.group({
      project_name:['',[Validators.required]], 
      project_description: ['',[Validators.required]],
      dueDate:['',[Validators.required]],
    })

  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectservice.getProjects().subscribe(
      (response) => {
        this.projects = response;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  createProject() {
    let createProject: Project = this.createProjectForm.value;
    this.projectservice.createProject(createProject).subscribe(
      () => {
        this.getProjects();
        console.log('Project created successfully');
      },
      (error) => {
        console.error('Error creating project:', error);
      }
    );

    this.router.navigate(['admin']);
  }


  openCreateProjectModal(){

  }

  openAssignModal(){}

  editProject(){}

  deleteProject(){}

  closeCreateProjectModal(){}



  // getUsers() {
  //   this.userService.getUsers().subscribe(
  //     (response: UserDetails[]) => {
  //       this.users = response;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

}