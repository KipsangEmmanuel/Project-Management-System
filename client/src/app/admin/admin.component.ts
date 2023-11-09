import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  projects: Project[] = [];
  projectName: string = '';
  dueDate: string = '';
  description: string = ''

  constructor(private projectService: ProjectService) {}

  closeCreateProjectModal() {}

  openCreateProjectModal() {}
  openAssignModal(project: any) {}
  editProject(project: any) {}
  deleteProject(project: any) {}
  createProject() {
    if (!this.projectName || !this.description || !this.dueDate) {
      console.error();
    }
  }

  ngOnInit() {
    this.loadProjects();
  }


  loadProjects() {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //methods
}
