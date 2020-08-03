import { Component, OnInit } from '@angular/core';
import { Form} from "../../models/form";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formulario;
  public name:string;

  constructor() {
    this.formulario = new Form(' ',' ', ' ', null)

    
   }

  ngOnInit(): void {

  }

  onSubmit(form){

    console.log(this.formulario);
    
  }



}
