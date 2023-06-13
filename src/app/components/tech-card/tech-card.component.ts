import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.sass']
})
export class TechCardComponent {

  @Input()
  techName: string = '';

  @Input()
  techColor: string = '';

  toUseColor: string = '#fff';

  toBodyColor: string = '#131313';

  swapColors(): void {
    this.toBodyColor = this.techColor;
    this.toUseColor = this.techColor;
  }

  outColors(): void {
    this.toBodyColor = '#131313';
    this.toUseColor = '#fff';
  }

}
