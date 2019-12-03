import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { FinishComponent } from './components/finish/finish.component';


const routes: Routes = [
  {
    path: "",
    redirectTo:"personal",
    pathMatch:"full"
  },
  
  {
    path: 'personal',
    component: PersonalDetailsComponent
  },
  {
    path: 'contact',
    component: ContactDetailsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'work',
    component: WorkExperienceComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
