import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1PadreComponent } from './componentes/Ejercicio1/ejercicio1-padre/ejercicio1-padre.component';
import { ListaProductosHijoComponent } from './componentes/Ejercicio2/lista-productos-hijo/lista-productos-hijo.component';
import { ListaProductosPadreComponent } from './componentes/Ejercicio2/lista-productos-padre/lista-productos-padre.component';
import { Ejercicio3HijoComponent } from './componentes/Ejercicio3/ejercicio3-hijo/ejercicio3-hijo.component';
import { Ejercicio3PadreComponent } from './componentes/Ejercicio3/ejercicio3-padre/ejercicio3-padre.component';
import { Ejercicio4HijoComponent } from './componentes/Ejercicio4/ejercicio4-hijo/ejercicio4-hijo.component';
import { Ejercicio4PadreComponent } from './componentes/Ejercicio4/ejercicio4-padre/ejercicio4-padre.component';
import { Persona } from './modelo/Persona';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio4HijoComponent,Ejercicio4PadreComponent,Ejercicio1PadreComponent,Ejercicio1PadreComponent,ListaProductosHijoComponent,ListaProductosPadreComponent,Ejercicio3HijoComponent,Ejercicio3PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril17Angular';
}
