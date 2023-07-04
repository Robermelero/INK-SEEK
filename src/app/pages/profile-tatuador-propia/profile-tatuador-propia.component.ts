import { Component } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-profile-tatuador-propia',
  templateUrl: './profile-tatuador-propia.component.html',
  styleUrls: ['./profile-tatuador-propia.component.css']
})
export class ProfileTatuadorPropiaComponent {
    public usuario : User;
    public publicaciones: Publicacion[];

    constructor(private router: Router, public userService: UserService) {
      // this.usuario = this.userService.user;
      // console.log(this.usuario)
      // this.usuario.id_user = this.userService.user.id_user
      // if (this.usuario.tatuador == "si"){
      //   this.userService.getInfoTatuador(this.usuario.id_user)
      //   .subscribe((resp:Respuesta) =>{
      //     this.usuario = resp.data_user[0];
      //   })
      // }
      // console.log(this.usuario)
      this.publicaciones = [
        new Publicacion(1, "https://media.istockphoto.com/id/491837154/es/foto/tattooist-demostrar-el-proceso-tatuaje-en-mano.jpg?s=612x612&w=0&k=20&c=SIXqBrUogTu8qdZMP4mDDkjFYZlRbkjdDYl5PFHjnyg=", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
        new Publicacion(3, "https://obsessiontattoo.com/wp-content/uploads/2019/03/tatuaje-catrina-retrato-realismo-blancoynegro-mujer-muslo-cadera-grande-evo_erk.jpg-630x761.jpg", "https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg", "Milagritos"),
      ];
    }
    quitarCaja(){
    }

    ngOnInit(): void {}

}