import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



  public publicaciones: Publicacion[];

  constructor(private router: Router) {
    this.publicaciones = [
      new Publicacion(1, "/assets/homee/1.png", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
      new Publicacion(2, "/assets/homee/2.png", "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg", "RoseInk"),
      new Publicacion(3, "/assets/homee/3.png", "https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg", "Milagritos"),
      new Publicacion(4, "/assets/homee/4.png", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
      new Publicacion(5, "/assets/homee/5.png", "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg", "RoseInk"),
      new Publicacion(6, "/assets/homee/6.png", "https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg", "Milagritos"),
      new Publicacion(7, "https://cdntattoofilter.com/event/17902/s.jpg", "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg", "MrPrint")
    ];
  }


  ngOnInit(): void {}

}
