import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  
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
      this.router.navigateByUrl('skills');
  }

  pervious(form:any) {
      this.router.navigateByUrl('personal');
  }

}
