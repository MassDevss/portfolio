import { AfterViewInit, Component, Directive, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Directive({selector: 'app-about-me'})
  class aboutMe {}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  myTechs: any[] = [
    {
      name: "HTML",
      color: "#e44f26",
      type: "front-end"
    },
    {
      name: "CSS",
      color: "#264de4",
      type: "front-end"
    },
    {
      name: "JavaScript",
      color: "#f1dc50",
      type: "front-end"
    },
    {
      name: "React",
      color: "#00d7fd",
      type: "front-end"
    },
    {
      name: "Angular",
      color: "#dc0030",
      type: "front-end"
    },
    {
      name: "NodeJs",
      color: "#62b346",
      type: "back-end"
    },
    {
      name: "Express",
      color: "#000000",
      type: "back-end"
    },
    {
      name: "MySql",
      color: "#0083a0",
      type: "back-end"
    },
    {
      name: "PostgreSQL",
      color: "#0083a0",
      type: "back-end"
    },
    {
      name: "TypeScript",
      color: "#007acc",
      type: "other"
    },
    {
      name: "Bash",
      color: "#2f3a3e",
      type: "other"
    },
  ]


}
