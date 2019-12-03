import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'row-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['../skills.component.scss']
})
export class SkillComponent {
   @Input() number : number


}
