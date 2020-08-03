import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public isShown1:boolean;
  public isShown2:boolean;
  public isShown3:boolean;


  constructor() {    

   }
  

  ngOnInit(): void {
    
  }

  showDiv(num:number){
    switch (num) {
      case 1:
        this.isShown1=!this.isShown1;
        break;
      case 2:
        this.isShown2=!this.isShown2;
        break; 
      case 3:
          this.isShown3=!this.isShown3;
        break;
    
      default:
        break;
    }
    
  }

 

}
