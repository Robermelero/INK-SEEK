import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public mostrarContenido: boolean = false;

public toggleHamburguesa() {
  this.mostrarContenido=!this.mostrarContenido
}


}