import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectService{

    constructor(private _http:HttpClient){

    }


    // [] of projects -> projects.component.ts from backend
    getProjects(): Observable <any>{
        return this._http.get('http://localhost:3500/api/getdataprojects');
    }

}

