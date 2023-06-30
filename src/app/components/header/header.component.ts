import { Component, HostListener } from '@angular/core';
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
  
  public goHome() {
    this.router.navigate(['/home']);
  }

  public goPerfil() {
    this.router.navigate(['/profile-tatuador-propia']);
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const menu = document.getElementById('hamburguesa');
    if (!(target instanceof Node) || !menu.contains(target)) {
      menu.classList.remove('activo');
    }
  }
}
