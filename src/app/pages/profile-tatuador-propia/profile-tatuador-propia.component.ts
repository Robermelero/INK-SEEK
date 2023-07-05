import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-tatuador-propia',
  templateUrl: './profile-tatuador-propia.component.html',
  styleUrls: ['./profile-tatuador-propia.component.css']
})
export class ProfileTatuadorPropiaComponent {
public user: User;

public publicaciones: Publicacion[];

constructor(private router: Router, public userService: UserService) {
  this.user = userService.user;
  this.publicaciones = [
    new Publicacion(1, "https://media.istockphoto.com/id/491837154/es/foto/tattooist-demostrar-el-proceso-tatuaje-en-mano.jpg?s=612x612&w=0&k=20&c=SIXqBrUogTu8qdZMP4mDDkjFYZlRbkjdDYl5PFHjnyg=", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
    // new Publicacion(2, "https://i.guim.co.uk/img/media/f6c77429ba6ce8bf2527c150551157b06d788b99/0_182_7276_4366/master/7276.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ab66ffe8723aa6885bdef487bef1930e", "https://e0.pxfuel.com/wallpapers/442/989/desktop-wallpaper-perfil-boy-face-thumbnail.jpg", "RoseInk"),
    new Publicacion(3, "https://obsessiontattoo.com/wp-content/uploads/2019/03/tatuaje-catrina-retrato-realismo-blancoynegro-mujer-muslo-cadera-grande-evo_erk.jpg-630x761.jpg", "https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg", "Milagritos"),
    // new Publicacion(4, "https://cdntattoofilter.com/event/17902/s.jpg", "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg", "MrPrint")
  ];
}
quitarCaja(){
}

ngOnInit(): void {}

}