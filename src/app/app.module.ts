import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgOptimizedImage } from "@angular/common";
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { FooterComponent } from "./shared/components/footer/footer.component";
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
