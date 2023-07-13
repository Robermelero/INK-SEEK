import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-tatuador-externa',
  templateUrl: './profile-tatuador-externa.component.html',
  styleUrls: ['./profile-tatuador-externa.component.css']
})
export class ProfileTatuadorExternaComponent {
  public publicaciones: Publicacion[] = [];
  public isFollowed: boolean;
  public usuarioSeleccionado: User;

  constructor(private router: Router, public userService: UserService) {
    this.usuarioSeleccionado = this.userService.usuarioSeleccionado;
    console.log("Holaaaaaa")
    this.userService.getTatuadorInfo2().subscribe((respuesta: Respuesta ) =>{
      this.usuarioSeleccionado.publicaciones = respuesta.data_foto      
      });     
      this.checkFollow(this.usuarioSeleccionado.id_user);
  }  
  checkFollow(id_user: number) {
    this.userService.checkFollow(id_user).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
  
  
  toggleFollow() {
    if (this.isFollowed) {
      this.unfollowUser(this.usuarioSeleccionado.id_user);
    } else {
      this.followUser(this.usuarioSeleccionado.id_user);
    }
  }
  
  followUser(id_user: number) {
    this.userService.followUser(id_user).subscribe(
      (response) => {
        this.isFollowed = true;
      }
    );
  }
  
  unfollowUser(id_user: number) {
    this.userService.unfollowUser(id_user).subscribe(
      (response) => {
        this.isFollowed = false;
      }
    );
  }
  
  quitarCaja(){
    }
  
  ngOnInit(): void {
    // this.usuarioSeleccionado = this.userService.usuarioSeleccionado;
  }
  
  goOpiniones(id_user: number){
    
    this.router.navigate(["opiniones"])
  }
}