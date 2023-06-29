import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-tatuador-propia',
  templateUrl: './profile-tatuador-propia.component.html',
  styleUrls: ['./profile-tatuador-propia.component.css']
})
export class ProfileTatuadorPropiaComponent {
 
  public publicaciones: Publicacion[];
  constructor(private router: Router) {
    this.publicaciones = [
      new Publicacion(1, "/assets/homee/1.png", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
      new Publicacion(2, "/assets/homee/2.png", "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg", "RoseInk"),]
}
}
