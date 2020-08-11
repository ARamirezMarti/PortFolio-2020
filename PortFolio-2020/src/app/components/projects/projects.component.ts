import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import {Project} from '../../models/project';
import { URL} from '../../services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor( private _projectService:ProjectService) { 
   
    this.url = URL;
  }

  ngOnInit(): void {
    this.projectRquest();
    
  }


  projectRquest(){
    this._projectService.getProjects().subscribe(
      response => {
        this.projects = response.project;
      },
      error =>{
        console.log(error);
      }

    );
  }
}