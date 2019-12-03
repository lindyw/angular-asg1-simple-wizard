import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  form: any;
  rows = [1,2,3];
  constructor(private router: Router) {}

  ngOnInit() {
  
  }

  save(form: any)  : boolean
  {
    if(!form.valid) {
      return false;
    }
    return true;
  }

  addSkill() {
    if (this.rows.length < 6)
      this.rows.push(this.rows.length + 1);
  }

  next(form:any) {
    if (this.save(form))
      this.router.navigateByUrl('finish');
  }

  pervious(form:any) {
      this.router.navigateByUrl('skills');
  }

}
