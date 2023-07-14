
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

  deleteCardPerfil(publicacion: Publicacion){
    console.log('BOOOOOORRA LA CAAAAAAARD');
    
    this.userService.deleteCardPerfil(publicacion.id_photo).subscribe((respuesta: Respuesta) => {
      this.user.publicaciones = this.user.publicaciones.filter(publicacion1 => publicacion1.id_photo !== publicacion.id_photo);
      console.log(respuesta);
      
    });
  }

  goTienda(id_user : number){
    this.userService.user.id_user = id_user;
    this.router.navigate(["tienda"]);
  }
};
