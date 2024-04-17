import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ejercio1-hijo',
  standalone: true,
  imports: [],
  templateUrl: './ejercio1-hijo.component.html',
  styleUrl: './ejercio1-hijo.component.css'
})
export class Ejercio1HijoComponent {

  @Input() mensajeRecibido:string="";
  
  
  
  

}
