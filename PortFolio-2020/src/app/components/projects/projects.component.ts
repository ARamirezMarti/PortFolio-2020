import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import {Project} from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor( private _projectService:ProjectService) { 
   
    this.url='http://localhost:3500/api/'
  }

  ngOnInit(): void {
    this.projectRquest();
    console.log(this.url);
  }


  projectRquest(){
    this._projectService.getProjects().subscribe(
      response => {

        this.projects = response.project;
        console.log(this.projects);

      },
      error =>{
        console.log(error);
      }

    );
  }
}