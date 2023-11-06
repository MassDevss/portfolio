import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ClearExtensionPipe } from './pipes/clear-extension.pipe';
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutMeComponent,
    TextBoxComponent,
    ClearExtensionPipe,
    TechCardComponent,
    ProjectsComponent,
    ContactComponent,
    ContactCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
