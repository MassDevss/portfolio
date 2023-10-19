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
      name: "El Tiburón pagina web",
      resume: "El Tiburón Burger es un restaurant de hamburguesas gurmet quien buscaba una pagina para mostrarse al mundo y dar un vistazo de los productos que crean",
      technologies: ["Angular", "NodeJS", "MongoDB", "ExpressJS"]
    },
    {
      url: "https://github.com/ManuelsSaNt/TiburonPVETs",
      image: "tiburon_sp.webp",
      name: "El Tiburón punto de venta",
      resume: "Con la necesidad de agilizar el proceso de tomar un pedido, procesarlo y entregarlo satisfactoriamente a los clientes se decidió crear este software, utilizado para cobrar y registrar los pedidos que tenga el negocio.",
      technologies: ["Angular", "NodeJS", "MongoDB", "ExpressJS"]
    },
    {
      url: "https://labstudiomedia.com",
      image: "labstudiomedia.webp",
      name: "LabStudioMedia",
      resume: "LabStudioMedia es un estudio de diseño gráfico, contenido audiovisual y desarrollo web que buscaba una pagina para mostrarse al mundo y dar un vistazo de los productos que crean.",
      technologies: ["Angular", "NodeJS", "MongoDB", "ExpressJS"]
    },
    {
      url: "https://www.cybercafe10m.com",
      image: "cybercafe10m.webp",
      name: "CyberCafe10M",
      resume: "",
      technologies: ["Angular", "NodeJS", "MongoDB", "ExpressJS"]
    }
  ];

}
