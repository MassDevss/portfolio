import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent implements OnInit, AfterViewInit{

  @Input()
  textTitle: string = "Default";

  @Input()
  textContent: string = "Default";

  @ViewChild('textTitle')
  titleElement: ElementRef<HTMLHeadElement> | undefined;

  @ViewChild('textContent')
  textElement: ElementRef<HTMLParagraphElement> | undefined;

  constructor() { }

  processText(toProcess: string): string {
    let finalText = toProcess;
    const regEx = /['\n']/g;
    finalText = finalText.replace(regEx, '<br>');
    return finalText;
  }

  ngOnInit(): void {
    this.textTitle = this.processText(this.textTitle);
    this.textContent = this.processText(this.textContent);
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.titleElement.nativeElement.innerHTML = this.textTitle;

    // @ts-ignore
    this.textElement.nativeElement.innerHTML = this.textContent;
  }

}
