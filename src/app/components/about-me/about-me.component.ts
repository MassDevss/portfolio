import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  birthDay: Date = new Date('08/30/2004');
  nowDate: Date = new Date();

  actualAge: number = 0;

  ngOnInit(): void {

    const nowYear = this.nowDate.getFullYear();
    const nowMonth = this.nowDate.getMonth();

    this.actualAge = nowYear - 2004;
    if (nowMonth < 7)
      this.actualAge -= 1

  }
}
