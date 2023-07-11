import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { TitleComponent } from './components/title/title.component';
import { CircleComponent } from './components/circle/circle.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SwithLanguageComponent } from './components/swith-language/swith-language.component';
import { ClearExtensionPipe } from './pipes/clear-extension.pipe';
import { TechSectionComponent } from './components/tech-section/tech-section.component';
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TitleComponent,
    CircleComponent,
    AboutMeComponent,
    TextBoxComponent,
    SwithLanguageComponent,
    ClearExtensionPipe,
    TechSectionComponent,
    TechCardComponent,
    ProyectCardComponent,
    ProyectsComponent,
    FooterComponent,
    ContactComponent,
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
