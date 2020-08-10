import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from "./global.service";



@Injectable()
export class FormService{

    constructor(private _http:HttpClient){

    }

    sendForm(formData): Observable <any>{   
        let fd=JSON.stringify(formData);
        return this._http.post(URL + '/sendform', fd );
    }

}