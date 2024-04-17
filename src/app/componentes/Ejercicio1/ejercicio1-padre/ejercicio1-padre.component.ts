import { Component } from '@angular/core';
import { Ejercio1HijoComponent } from '../ejercio1-hijo/ejercio1-hijo.component';

@Component({
  selector: 'app-ejercicio1-padre',
  standalone: true,
  imports: [Ejercio1HijoComponent],
  templateUrl: './ejercicio1-padre.component.html',
  styleUrl: './ejercicio1-padre.component.css'
})
export class Ejercicio1PadreComponent {

  mensaje:string="Te estoy pasando esto";

}
