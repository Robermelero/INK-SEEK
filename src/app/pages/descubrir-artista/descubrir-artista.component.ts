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
  public artistas: User[]

  constructor(private router: Router, public userService: UserService) {
    this.artistas = [];
    this.userService.getArtistas()
    .subscribe((res:Respuesta) => {
      this.artistas = res.data_artistas;
      console.log(res)
    })
  }
  
  ngOnInit(): void {}
  mostrarPerfil(artista: User) {
    this.userService.goPerfilartista(artista.id_user)
    .subscribe((res:Respuesta) => {
      
    })
    this.router.navigate(['/profile-tatuador-externa', artista.id_user]);
    console.log(artista.id_user)
  }
} 
