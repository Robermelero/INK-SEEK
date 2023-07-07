import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-tatuador-externa',
  templateUrl: './profile-tatuador-externa.component.html',
  styleUrls: ['./profile-tatuador-externa.component.css']
})
export class ProfileTatuadorExternaComponent implements OnInit {

  public publicaciones: Publicacion[];
  public isFollowed: boolean;
  public id_user: number;

  constructor(private router: Router, public userService: UserService) {

    this.id_user = userService.user.id_user;
    console.log(this.id_user)

    this.publicaciones = [
      new Publicacion(1, "https://media.istockphoto.com/id/491837154/es/foto/tattooist-demostrar-el-proceso-tatuaje-en-mano.jpg?s=612x612&w=0&k=20&c=SIXqBrUogTu8qdZMP4mDDkjFYZlRbkjdDYl5PFHjnyg=", "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", "ArtTattoo"),
      new Publicacion(3, "https://obsessiontattoo.com/wp-content/uploads/2019/03/tatuaje-catrina-retrato-realismo-blancoynegro-mujer-muslo-cadera-grande-evo_erk.jpg-630x761.jpg", "https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg", "Milagritos"),
    ];
  }

  followUser(id_user: number) {
    console.log('pepito');
    this.userService.followUser(id_user).subscribe(
      (response) => {
        console.log(response);
        console.log("cucu");
        this.isFollowed = true;
      },
      (error) => {
        console.error('Error al seguir al usuario', error);
      }
    );
  }
  
  unfollowUser(id_user: number) {
    console.log('lalala');
    this.userService.unfollowUser(id_user).subscribe(
      (response) => {
        console.log(response);
        console.log("pipipi");
        this.isFollowed = false;
      },
      (error) => {
        console.error('Error al dejar de seguir al usuario', error);
      }
    );
  }
    toggleFollow() {
      if (this.isFollowed) {
        this.unfollowUser(this.id_user);
      } else {
        this.followUser(this.id_user);
      }
    }
    
  

  ngOnInit(): void {
    
  }
}
