import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.sass']
})
export class CircleComponent implements AfterViewInit, OnDestroy{

  @ViewChild('circle')
  Circle: ElementRef<HTMLElement> | undefined;

  // number of seconds hoo needs a circle to repeat animation
  @Input()
  repitIn: number = 1;

  @Input()
  isHeartBreak: boolean = false;

  interval: any;

  isAnimated: boolean = false;

  ngAfterViewInit(): void {
    const circleElem = this.Circle?.nativeElement;

    this.interval = setInterval(() => {
      if (circleElem){
        if(!this.isAnimated){
          circleElem.classList.add('animate__animated');
          circleElem.classList.add('animate__pulse');
          this.isAnimated = true;
        }else {
          circleElem.classList.remove('animate__animated');
          circleElem.classList.remove('animate__pulse');
          this.isAnimated = false;
        }
      }
    }, this.repitIn * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.interval = null;
  }

}
