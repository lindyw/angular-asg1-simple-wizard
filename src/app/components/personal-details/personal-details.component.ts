import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  form: any;
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

  next(form:any) {
    if (this.save(form))
      this.router.navigateByUrl('contact');
  }
}
