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
  }

  getTatuador(inputValue: string) {
    this.userService.buscarTatuador(inputValue).subscribe(
      (response: any) => {
        if (inputValue == "" || inputValue == null || inputValue == undefined){
          this.userService.getArtistas()
          .subscribe((res:Respuesta) => {
            this.userService.artistas = res.data_artistas;
            console.log(res);
          })
        }else{
          this.userService.artistas = response.data;
          console.log(response);
        }        
      },
    );
  }

  mostrarPerfil(tatuador: User) {    
    this.router.navigate(['/profile-tatuador-externa', tatuador.id_user]);
  }
  
  ngOnInit(): void {
    this.userService.getArtistas()
    .subscribe((res:Respuesta) => {
      this.userService.artistas = res.data_artistas;
    })
  }
}