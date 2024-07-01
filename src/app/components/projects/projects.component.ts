import { Component } from '@angular/core';
import { Project } from 'src/app/types/Project.type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      production: "https://labstudiomedia.com",
      image: "labstudiomedia.webp",
      name: "LabStudioMedia.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Landing page para una empresa de desarrollo de productos digitales, branding y marketing, muestra una pequeña colección de sus servicios utilizando unas tarjetas con los mismos.'
    },
    {
      production: "https://www.cybercafe10m.com",
      image: "cybercafe10m.webp",
      name: "CyberCafe10M.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Landing page para CyberCafe10m, un cybercafe dedicado a soluciones para sus clientes relacionadas con tramites, la pagina incluye una vista de algunos de sus servicios.'
    }
  ];

}
