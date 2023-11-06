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
      url: "https://eltiburonburger.vercel.app/home",
      image: "tibuProject.webp",
      name: "El Tiburón Burger web menu",
      technologies: ["React", "MySQL", "NodeJS", "TypeScript", "Express"],
      description: 'Menu digital para restaurante, con sistema de administración de productos y sistema de login con usuarios.'
    },
    {
      url: "https://github.com/ManuelsSaNt/TiburonPVETs",
      image: "tiburon_sp.webp",
      name: "El Tiburón Burger Punto de venta",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Nodejs", "Electron", "MySQL"],
      description: 'Punto de venta para restaurante, con sistema de administración de productos, registro de productos y clientes en el sistema.'
    },
    {
      url: "https://labstudiomedia.com",
      image: "labstudiomedia.webp",
      name: "LabStudioMedia.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Sitio web para empresa de marketing digital, diseño y desarrollo web.'
    },
    {
      url: "https://www.cybercafe10m.com",
      image: "cybercafe10m.webp",
      name: "CyberCafe10M.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Sitio web para CyberCafe10m, un cybercafe que se hace notar por su atención al cliente y calidad de servicios!!.'
    }
  ];

}
