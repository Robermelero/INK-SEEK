import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public mostrarContenido: boolean = false;
  constructor(private router: Router) {}
  public toggleHamburguesa() {
    this.mostrarContenido = !this.mostrarContenido;
  }
  
  goHome(){
    this.router.navigate(['/home'])
  }

  goPerfil(){
    this.router.navigate(['/profile-tatuador-propia'])
  }

}


