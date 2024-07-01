import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Tech} from 'src/app/types/Tech.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  nowDate: Date = new Date();

  actualAge: number = 0;

  myTechs: Tech[] = [
    { name: "HTML", color: "#e44f26" },
    { name: "CSS", color: "#264de4",},
    { name: "JavaScript", color: "#f1dc50",},
    { name: "React", color: "#00d7fd",},
    { name: "Angular", color: "#dc0030",},
    { name: "NodeJs", color: "#62b346" },
    { name: "Express", color: "#000000" },
    { name: "MySql", color: "#0083a0" },
    { name: "PostgresSQL", color: "#0083a0" },
    { name: "TypeScript", color: "#007acc" }
  ];

  scrollTo(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

  ngOnInit(): void {
    const nowYear = this.nowDate.getFullYear();
    const nowMonth = this.nowDate.getMonth();

    this.actualAge = nowYear - 2004;
    if (nowMonth < 7)
      this.actualAge -= 1
  }

}
