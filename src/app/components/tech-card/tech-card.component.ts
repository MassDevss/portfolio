
import { Component, Input,  OnInit, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.sass']
})
export class TechCardComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('cardBody')
  cardElem: ElementRef<HTMLDivElement> | undefined;

  @Input()
  techName: string = '';

  @Input()
  techColor: string = '';

  toUseColor: string = '#fff';

  toBodyColor: string = '#131313';

  interval: any = null;

  swapColors(): void {
    this.toBodyColor = this.techColor;
    this.toUseColor = this.techColor;
  }

  outColors(): void {
    this.toBodyColor = '#131313';
    this.toUseColor = '#fff';
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.swapColors()
    }, 500);

    setTimeout(() => {
      this.outColors()
    },1500);

  }

  ngAfterViewInit(): void {
    this.interval = setInterval(() => {

      const random: number = Math.floor(Math.random() * 13);
      const card: HTMLDivElement | undefined = this.cardElem?.nativeElement;

      if (card && random === 11){
        setTimeout(() => {
          this.swapColors();
          card.classList.add('simulateHover');
        }, 500)

        setTimeout(() => {
          this.outColors();
          card.classList.remove('simulateHover');
        },1500)
      }

    }, 1500)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.interval = null;
  }

}
