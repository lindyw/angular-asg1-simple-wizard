import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'row-job',
  templateUrl: './job.component.html',
  styleUrls: ['../work-experience.component.scss']
})
export class JobComponent implements OnInit {
  @Input() number : number

  ngOnInit() {
    
  }
}
