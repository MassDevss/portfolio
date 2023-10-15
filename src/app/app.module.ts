import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SwithLanguageComponent } from './components/swith-language/swith-language.component';
import { ClearExtensionPipe } from './pipes/clear-extension.pipe';
import { TechSectionComponent } from './components/tech-section/tech-section.component';
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutMeComponent,
    TextBoxComponent,
    SwithLanguageComponent,
    ClearExtensionPipe,
    TechSectionComponent,
    TechCardComponent,
    ProyectCardComponent,
    ProyectsComponent,
    ContactComponent,
    ContactCardComponent,
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
