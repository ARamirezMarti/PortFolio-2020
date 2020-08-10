import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public isShown1:boolean;
  public isShown2:boolean;
  public isShown3:boolean;

  constructor() { }

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
