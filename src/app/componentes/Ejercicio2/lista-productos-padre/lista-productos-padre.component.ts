import { Component, EventEmitter, Output } from '@angular/core';
import { ListaProductosHijoComponent } from '../lista-productos-hijo/lista-productos-hijo.component';

@Component({
  selector: 'app-lista-productos-padre',
  standalone: true,
  imports: [ListaProductosHijoComponent],
  templateUrl: './lista-productos-padre.component.html',
  styleUrl: './lista-productos-padre.component.css'
})
export class ListaProductosPadreComponent {

  productosMostrados:string[]=[];

  recibirDato(dato:string){

    this.productosMostrados.push(dato);

  }
  
}
