import { Component, OnInit } from '@angular/core';
import { Form} from "../../models/form";
import { FormService} from '../../services/form.service';
import { fromEventPattern } from 'rxjs';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[
    FormService
  ]
})
export class ContactComponent implements OnInit {

  public formulario;

  constructor( private _formService : FormService) {
    this.formulario = new Form(' ', ' ', ' ', null , ' ');

    

   }

  ngOnInit(): void {

  }

  onSubmit(form){
    
    this._formService.sendForm(this.formulario).subscribe(
      response => {
        if(response){
          form.reset();
        }
        
      },
      error => {
        console.log(error);
      }
    );
    
    
  }



}
