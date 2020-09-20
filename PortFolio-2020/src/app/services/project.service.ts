import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from './global.service';



@Injectable()
export class ProjectService{

    constructor(private _http:HttpClient){

    }


    // [] of projects -> projects.component.ts from backend
    getProjects(): Observable <any>{
        return this._http.get(`${URL}/getdataprojects`);
    }

   

}

