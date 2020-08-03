import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent} from './components/experience/experience.component';
import { ProjectsComponent} from './components/projects/projects.component';
import { ContactComponent} from './components/contact/contact.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
