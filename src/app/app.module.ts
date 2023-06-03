import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { TitleComponent } from './components/title/title.component';
import { CircleComponent } from './components/circle/circle.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SwithLanguageComponent } from './components/swith-language/swith-language.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    TitleComponent,
    CircleComponent,
    AboutMeComponent,
    TextBoxComponent,
    SwithLanguageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
