import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Form} from '../models/form'
import { URL } from './global.service';



@Injectable()
export class FormService{
    public url;
    constructor(private _http : HttpClient ){
        this.url = URL;
    }

    sendForm(formData:Form): Observable <any>{  
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        const fd = JSON.stringify(formData);
        return this._http.post(`${this.url}/sendform`, fd , httpOptions);
        
    }

}