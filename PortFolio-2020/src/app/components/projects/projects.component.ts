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

  constructor( private _projectService:ProjectService) { 
   
  }

  ngOnInit(): void {
    this.projectRquest();
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

    )
  }
}