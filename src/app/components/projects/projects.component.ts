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
      production: "https://eltiburonburger.vercel.app/home",
      github: "",
      image: "tibuProject.webp",
      name: "El Tiburón Burger web menu",
      technologies: ["React", "MySQL", "NodeJS", "TypeScript", "Express"],
      description: 'Menu digital para restaurante, con sistema de administración de productos y sistema de login con usuarios.'
    },
    {
      production: "",
      github: "https://github.com/ManuelsSaNt/TiburonPVETs",
      image: "tiburon_sp.webp",
      name: "El Tiburón Burger Punto de venta",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Nodejs", "Electron", "MySQL"],
      description: 'Punto de venta para restaurante, con sistema de administración de productos, registro de productos y clientes en el sistema.'
    },
    {
      production: "https://labstudiomedia.com",
      github: "",
      image: "labstudiomedia.webp",
      name: "LabStudioMedia.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Sitio web para empresa de marketing digital, diseño y desarrollo web.'
    },
    {
      production: "https://www.cybercafe10m.com",
      github: "",
      image: "cybercafe10m.webp",
      name: "CyberCafe10M.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Sitio web para CyberCafe10m, un cybercafe que se hace notar por su atención al cliente y calidad de servicios!!.'
    }
  ];

}
