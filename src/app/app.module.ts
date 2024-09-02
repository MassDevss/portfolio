import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/pages/home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { TechCardComponent } from './home/components/tech-card/tech-card.component';
import { ProjectsComponent } from './home/sections/projects/projects.component';
import { ContactCardComponent } from './home/components/contact-card/contact-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechCardComponent,
    ProjectsComponent,
    ContactCardComponent,
    FooterComponent,
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
