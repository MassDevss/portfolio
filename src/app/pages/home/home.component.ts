import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Tech} from 'src/app/types/Tech.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  myTechs: Tech[] = [
    { name: "HTML", color: "#e44f26" },
    { name: "CSS", color: "#264de4",},
    { name: "JavaScript", color: "#f1dc50",},
    { name: "React", color: "#00d7fd",},
    { name: "Angular", color: "#dc0030",},
    { name: "NodeJs", color: "#62b346" },
    { name: "Express", color: "#000000" },
    { name: "MySql", color: "#0083a0" },
    { name: "PostgreSQL", color: "#0083a0" },
    { name: "TypeScript", color: "#007acc" },
    { name: "Bash", color: "#2f3a3e" },
  ];

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
