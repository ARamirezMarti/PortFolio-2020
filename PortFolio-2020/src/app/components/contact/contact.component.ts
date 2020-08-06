import { Component, OnInit } from '@angular/core';
import { Form} from "../../models/form";
import { FormService} from '../../services/form.service';



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
  public msg;

  constructor( private _formService : FormService) {
    this.formulario = new Form(' ', ' ', ' ', null, ' ')
    this.msg = '';

    
   }

  ngOnInit(): void {

  }

  onSubmit(form){

    console.log(this.formulario);

    this._formService.sendForm(this.formulario).subscribe(
      response => {
        form.reset();
        this.msg=" Email sent";
      console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    
    
  }



}
