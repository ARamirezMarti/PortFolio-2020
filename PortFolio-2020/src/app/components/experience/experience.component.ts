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
  public isShown4:boolean;
  public isShown5:boolean;

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
        case 4:
          this.isShown4=!this.isShown4;
        break;
        case 5:
          this.isShown5=!this.isShown5;
        break;
    
      default:
        break;
    }
    
  }

 

}
