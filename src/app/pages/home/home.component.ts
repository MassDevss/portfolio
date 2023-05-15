import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements  OnInit, OnDestroy{

  moveInterval: any;
  windowWidth: number = 0;

  left: number = 0;
  top: number = 0;

  leftStyle: string = "0px";
  topStyle: string = "0px";

  constructor() {
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;

    this.moveInterval = setInterval(() => {

      this.left += 100;
      // this.top += 50;

      console.log(this.windowWidth)
      console.log(this.left)

      if (this.windowWidth < this.left){
        this.left = 0;
      }

      this.leftStyle = `${this.left}px`;
      this.topStyle = `${this.top}px`;

    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.moveInterval);
  }

}
