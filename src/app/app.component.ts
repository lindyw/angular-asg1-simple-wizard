import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'asg1-simple-wizard';
  currentModule ="personal";
  constructor(private router: Router) {
  }

 ngOnInit() {
  this.router.events.subscribe(e => {
    if(e instanceof NavigationEnd){
      if (Object.entries(this.router.parseUrl(e.url).root.children).length > 0)
      {
        console.log(this.router.url.slice(1));
        this.currentModule = this.router.url.slice(1);
      } 
    }
  })
  }
}
