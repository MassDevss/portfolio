import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass']
})
export class ContactCardComponent {

  @Input()
  username: string = 'default'

  @Input()
  linkMedia: string = 'default'

}
