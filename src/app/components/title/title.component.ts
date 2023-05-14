import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit, OnDestroy{

  animateInterval: any;

  constructor(){

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }




}
