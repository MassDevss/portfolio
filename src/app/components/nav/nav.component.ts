import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  constructor(private viewportScroller: ViewportScroller){ }

  scrollTo(id: string){
    this.viewportScroller.scrollToAnchor(id);
  }

}
