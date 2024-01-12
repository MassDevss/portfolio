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
      production: "https://tiburonburger.vercel.app/home",
      github: "",
      image: "tibuProject.webp",
      name: "El Tiburón Burger web menu",
      technologies: ["Angular", "MySQL", "NodeJS", "TypeScript", "Express", "ZOD", "JWT"],
      description: 'Menu digital para restaurante, con sistema de administración de productos y recuperacion de los mismos por una API, validaciones con ZOD, logins e implementacion de JSON Web Tokens.'
    },
    {
      production: "",
      github: "https://github.com/ManuelsSaNt/TiburonPVETs",
      image: "tiburon_sp.webp",
      name: "El Tiburón Burger Punto de venta",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Nodejs", "Electron", "MySQL"],
      description: 'Punto de venta para un negocio familiar construido con tecnologías web, usa impresora térmica, y una base de datos para guardar productos, clientes y un registro de ordenes del sistema.'
    },
    {
      production: "https://labstudiomedia.com",
      github: "",
      image: "labstudiomedia.webp",
      name: "LabStudioMedia.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Landing page para una empresa de desarrollo de productos digitales, branding y marketing, muestra una pequeña colección de sus servicios utilizando unas tarjetas con los mismos.'
    },
    {
      production: "https://www.cybercafe10m.com",
      github: "",
      image: "cybercafe10m.webp",
      name: "CyberCafe10M.com",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: 'Landing page para CyberCafe10m, un cybercafe dedicado a soluciones para sus clientes relacionadas con tramites, la pagina incluye una vista de algunos de sus servicios.'
    }
  ];

}
