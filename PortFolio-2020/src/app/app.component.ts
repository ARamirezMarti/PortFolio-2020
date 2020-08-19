import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public links:Array<string>;

  constructor(private translate: TranslateService){
    translate.setDefaultLang('es');
    this.links=['https://github.com/ARamirezMarti','https://www.linkedin.com/in/antonio-ramirez-marti-00457b120/']

  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
 
}


  
