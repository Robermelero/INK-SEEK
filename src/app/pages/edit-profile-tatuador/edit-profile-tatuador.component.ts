import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public registro: FormGroup;

  constructor(public userService: UserService, private formBuilder: FormBuilder,) {
    this.usuario = this.userService.user;
    console.log(this.usuario);
    this.buildForm();
  } 

  private buildForm() {
    const minPassLength = 8;
    const maxPassLength = 16;

    this.registro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(minPassLength), Validators.maxLength(maxPassLength)]],
    });
  }

  info(newName: HTMLInputElement, newLastname: HTMLInputElement, newEmail: HTMLInputElement, newPassword: HTMLInputElement) {
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

  info2(newName: string, nickname: string, newLastname: string, newEmail: string,  studio: string, style: string, descripcion: string, newPassword: string) {
    this.usuario.id_user = this.userService.user.id_user;
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
