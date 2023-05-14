import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.sass']
})
export class CircleComponent {

  @Input()
  top: string = "";

  @Input()
  left: string = "";

  @Input()
  rigth: string = "";

  @Input()
  bottom: string = "";


  setLocation() {
    return
  }


}
