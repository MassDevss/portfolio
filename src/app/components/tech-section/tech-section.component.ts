import { Component } from '@angular/core';
import { technologies } from 'src/app/technologies/technologies';

@Component({
  selector: 'app-tech-section',
  templateUrl: './tech-section.component.html',
  styleUrls: ['./tech-section.component.sass']
})
export class TechSectionComponent {

  myTechs: any[] = technologies

}
