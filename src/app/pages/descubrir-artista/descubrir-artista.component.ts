import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-descubrir-artista',
  templateUrl: './descubrir-artista.component.html',
  styleUrls: ['./descubrir-artista.component.css']
})
export class DescubrirArtistaComponent implements OnInit {

  public publicaciones: Publicacion[];
  public artistas: User[];
  public artista: User;

  constructor(private router: Router, public userService: UserService) {
    this.artistas = [];
    // this.userService.getArtistas()
    // .subscribe((res:Respuesta) => {
    //   this.artistas = res.data_artistas;
    // })
  }
  mostrarPerfil(tatuador: User) {
    // console.log("caca")
    // this.artista = tatuador;
    // this.userService.perfilArtista(tatuador)
    // .subscribe((res:Respuesta) => {
    //   this.artista = res.data_user[0]
    //   console.log(this.artista)
    // })
    this.router.navigate(['/profile-tatuador-externa', tatuador.id_user]);
    // this.userService.getArtistaInfo(artista.id_user)
    // .subscribe((res: Respuesta) => {
    //   const artistaInfo = res.data_artista;
    //   this.router.navigate(['/profile-tatuador-externa', artistaInfo.id_user]);
    // });
    
  }
  
  ngOnInit(): void {
    this.userService.getArtistas()
    .subscribe((res:Respuesta) => {
      this.artistas = res.data_artistas;
    })
  }
}
