import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent implements OnInit{

  @Input()
  title: string = "Default";

  @Input()
  textContent: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at et ex officia quia? Amet deserunt eum illo labore nesciunt optio ratione, ut voluptatibus.";

  constructor() {
  }

  ngOnInit(): void {

  }

}
