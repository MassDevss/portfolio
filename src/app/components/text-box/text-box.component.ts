import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent {

  @Input()
  textTitle: string = "Default";

  @Input()
  textContent: string = "Default";

}
