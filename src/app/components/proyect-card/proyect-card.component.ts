import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.sass']
})
export class ProyectCardComponent {

  @Input()
  proyectName: string = '';

  @Input()
  proyectResume: string = '';

  @Input()
  proyectImageName: string = '';

  @Input()
  proyectUrl: string = '';

}
