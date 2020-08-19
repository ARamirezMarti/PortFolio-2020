import { Component, OnInit } from '@angular/core';
import {URL} from '../../services/global.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  public percent: Array <string>;
  public url;


  constructor() {
    this.url = URL;
    this.percent = ['60%' , '100%', '70%']
  }
  

  ngOnInit(): void {
  }

 

}
