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
    },
    {
      production: "https://ng-todo-sandy.vercel.app/",
      github: "https://github.com/ManuelsSaNt/ngTodo",
      image: "ngToDo.webp",
      name: "ngToDo",
      technologies: ["Angular", "TypeScript", "HTML", "CSS"],
      description: 'Proyecto de una lista de tareas construido en su totalidad con Angular y TypeScript utilizando el LocalStorage por medio de un Service.'
    },
    {
      production: "https://www.manuelsamaniego.com.mx/",
      github: "https://github.com/ManuelsSaNt/portfolio",
      image: "portfolio.webp",
      name: "Portafolio web",
      technologies: ["Angular", "TypeScript", "HTML", "Sass"],
      description: 'Portafolio personal para mostrar mis proyectos y dar a conocer mas sobre quien soy, construido en angular y actualizado a Angular 17.'
    }
  ];

}
