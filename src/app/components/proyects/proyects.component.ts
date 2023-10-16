import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.sass']
})
export class ProyectsComponent {

  proyects: any[] = [
    {
      proyectUrl: "https://eltiburonburger.vercel.app/home",
      proyectImageName: "tibuProyect.png",
      proyectName: "El Tiburon pagina web",
      proyectResume: "El Tiburon Burger es un restaurant de hamburguesas gurmet quien buscaba una pagina para mostrarse al mundo y dar un vistazo de los productos que crean"
    },
    {
      proyectUrl: "https://github.com/ManuelsSaNt/TiburonPVETs",
      proyectImageName: "tiburon_sp.png",
      proyectName: "El Tiburon punto de venta",
      proyectResume: "Con la necesidad de agilizar el proceso de tomar un pedido, procesarlo y entregarlo satisfactoriamente a los clientes se decidió crear este software, utilizado para cobrar y registrar los pedidos que tenga el negocio."
    },
    {
      proyectUrl: "https://github.com/ManuelsSaNt/TiburonPVETs",
      proyectImageName: "tiburon_sp.png",
      proyectName: "El Tiburon punto de venta",
      proyectResume: "Con la necesidad de agilizar el proceso de tomar un pedido, procesarlo y entregarlo satisfactoriamente a los clientes se decidió crear este software, utilizado para cobrar y registrar los pedidos que tenga el negocio."
    }
  ]

}
