import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FormService{

    constructor(private _http:HttpClient){

    }

    sendForm(formData): Observable <any>{   
        let fd=JSON.stringify(formData);
        return this._http.post('http://localhost:3500/api/sendform', fd );
    }

}