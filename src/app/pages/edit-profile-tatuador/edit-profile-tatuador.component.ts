import { Component } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-profile-tatuador',
  templateUrl: './edit-profile-tatuador.component.html',
  styleUrls: ['./edit-profile-tatuador.component.css']
})
export class EditProfileTatuadorComponent {
  public is_Tatuador: boolean;
  public usuario: User;
  public id_user: number;

  constructor(public userService: UserService) {
    this.usuario = this.userService.user;
    // this.is_Tatuador = this.userService.is_Tatuador;
    this.id_user = this.userService.user.id_user;
    console.log(this.usuario);
  }
  
  info(newPhoto: HTMLInputElement, newName: HTMLInputElement, newLastname: HTMLInputElement, newEmail: HTMLInputElement, newPassword: HTMLInputElement) {
    this.usuario.photo = newPhoto.value;
    this.usuario.name = newName.value;
    this.usuario.last_name = newLastname.value;
    this.usuario.email = newEmail.value;
    this.usuario.id_user = this.userService.user.id_user;
    this.usuario.password = newPassword.value;
    console.log(this.usuario);
    this.userService.edit(this.usuario)
      .subscribe((resp: Respuesta) => {
        if (resp.mensaje === 'Los datos son correctos') {
          this.userService.user = resp.data_user[0];
        } else {
          console.log('Error al iniciar sesión');
        }
      });
  }

  info2(newPhoto: string, newName: string, nickname: string, newLastname: string, newEmail: string,  studio: string, style: string, descripcion: string, newPassword: string) {
    this.usuario.id_user = this.userService.user.id_user;
    this.usuario.photo = newPhoto;
    this.usuario.name = newName;
    this.usuario.last_name = newLastname;
    this.usuario.email = newEmail;
    this.usuario.password = newPassword;
    this.usuario.nickname = nickname;
    this.usuario.style = style;
    this.usuario.studio = studio;
    this.usuario.descripcion = descripcion;
    console.log(this.usuario);
    this.userService.edit(this.usuario)
      .subscribe((resp: Respuesta) => {
        if (resp.mensaje === 'Los datos son correctos') {
          this.userService.user = resp.data_user[0];
        } else {
          console.log('Error al iniciar sesión');
        }
      });
  }
}
