import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-profile-tatuador-propia',
  templateUrl: './profile-tatuador-propia.component.html',
  styleUrls: ['./profile-tatuador-propia.component.css']
})
export class ProfileTatuadorPropiaComponent{
  public user: User;
  public publicaciones: Publicacion[] = [];

  constructor(private router: Router, public userService: UserService) {

    
    
    this.user = this.userService.user
    console.log(this.user);

    this.userService.getTatuadorInfo().subscribe((respuesta: Respuesta ) =>{
    console.log(respuesta.data_foto);
    this.user.publicaciones = respuesta.data_foto
    
    });
  };
  deleteCardPerfil(){

  }
  // deleteCardPerfil(id_photo: number): void {
  //   this.userService.deleteCardPerfil(id_photo).subscribe(() => {
  //     this.user.publicaciones = this.user.publicaciones.filter(publicacion => publicacion.id_publicacion !== id_photo);
  //   });
  // }
};