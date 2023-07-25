import { AfterViewInit, Component, Directive, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Directive({selector: 'app-about-me'})
  class aboutMe {}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

}
