import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-productos-hijo',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos-hijo.component.html',
  styleUrl: './lista-productos-hijo.component.css'
})
export class ListaProductosHijoComponent {

  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();




  enviarPadre(item:string) {

    this.llamadaPadre.emit(item);

    }

    productos:string[]=["Leche","Pan","Café","Azucar","Huevos","Platanos"];

  

}
