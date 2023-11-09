import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:7500/project/';

  constructor(private http: HttpClient) { }

  createProject(projectData: any): Observable<any> {
    const url = `${this.baseUrl}/createProject`;
    return this.http.post(url, projectData);
  }

  updateProject(projectData: any): Observable<any> {
    const url = `${this.baseUrl}/updateProject`;
    return this.http.put(url, projectData);
  }

  deleteProject(projectId: string): Observable<any> {
    const url = `${this.baseUrl}/deleteProject/${projectId}`;
    return this.http.delete(url);
  }

  completeProject(projectId: string): Observable<any> {
    const url = `${this.baseUrl}/completeProject/${projectId}`;
    return this.http.put(url, {});
  }

  inProgressProject(projectId: string): Observable<any> {
    const url = `${this.baseUrl}/inProgressProject/${projectId}`;
    return this.http.put(url, {});
  }

  getProject(projectId: string): Observable<Project> {
    const url = `${this.baseUrl}/getProject/${projectId}`;
    return this.http.get<Project>(url);
  }

  getProjects(): Observable<Project[]> {
    const url = `${this.baseUrl}/getProjects`;
    return this.http.get<Project[]>(url);
  }

  getAssignedProjects(): Observable<Project[]> {
    const url = `${this.baseUrl}/getAssignedProjects`;
    return this.http.get<Project[]>(url);
  }

  assignProject(projectId: string, userId: string): Observable<any> {
    const url = `${this.baseUrl}/assignProject`;
    const body = { project_id: projectId, user_id: userId };
    return this.http.post(url, body);
  }

  unassignProject(projectId: string): Observable<any> {
    const url = `${this.baseUrl}/unassignProject`;
    const body = { project_id: projectId };
    return this.http.post(url, body);
  }

  getUserAssignedProject(userId: string): Observable<Project> {
    const url = `${this.baseUrl}/getUserAssignedProject`;
    const body = { user_id: userId };
    return this.http.post<Project>(url, body);
  }
}
