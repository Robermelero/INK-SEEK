import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent {
  public publicaciones: Publicacion[];
  public user: User;
  @Input() artistaPadre: User;

  constructor(private router: Router, public userService: UserService) {
  }

  verPerfil(tatuador: User) {
    console.log("caca")
    this.artistaPadre = tatuador;
    this.userService.perfilArtista(tatuador)
    .subscribe((res:Respuesta) => {
      this.artistaPadre = res.data_user[0]
      console.log(this.artistaPadre)
    })
    this.router.navigate(['/profile-tatuador-externa', this.artistaPadre.id_user]);
  }
}
