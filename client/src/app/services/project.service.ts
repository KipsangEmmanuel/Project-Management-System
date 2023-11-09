import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) {}
  createProject(project: Project): Observable<any> {
    return this.http.post('http://localhost:7500/project/', project);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:7500/project/', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

}