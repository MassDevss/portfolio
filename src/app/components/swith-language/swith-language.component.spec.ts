import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithLanguageComponent } from './swith-language.component';

describe('SwithLanguageComponent', () => {
  let component: SwithLanguageComponent;
  let fixture: ComponentFixture<SwithLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwithLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwithLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
