
import { Component, Input,  OnInit, Renderer2, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';


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

  isFistView: boolean = true;

  interval: any = null;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  swapColors(): void {
    this.toBodyColor = this.techColor;
    this.toUseColor = this.techColor;
  }

  outColors(): void {
    this.toBodyColor = '#131313';
    this.toUseColor = '#fff';
  }

  callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (this.isFistView){
            this.isFistView = false;

            setTimeout(() => {
              this.swapColors()
            }, 500)

            setTimeout(() => {
              this.outColors()
            },1500)
          }
        }
      });
    };

  ngOnInit() {
    const options = {
      root: null, // El viewport
      rootMargin: '0px', // Margen alrededor del viewport
      threshold: 0.5 // Umbral de visibilidad
    };

    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.elementRef.nativeElement);
  }

  ngAfterViewInit(): void {
    this.interval = setInterval(() => {

      const random = Math.floor(Math.random() * 12);
      const card = this.cardElem?.nativeElement;

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
