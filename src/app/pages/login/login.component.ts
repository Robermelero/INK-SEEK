import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    // Animations code here...
  ]
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(
    public userService: UserService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    console.log('Botón presionado');
    this.userService.login(this.user).subscribe((res: Respuesta) => {
      console.log(res);
      if (res.mensaje === 'Los datos son correctos') {
        console.log(res.mensaje);
        this.userService.logueado = true;
        this.userService.user = res.data_user[0];
        console.log(this.userService.user);
        this.router.navigateByUrl('/home');
        if (res.data_user[0].is_Tatuador === 1) {
          this.userService.is_Tatuador = true;
        } else {
          this.userService.is_Tatuador = false;
        }
        if (this.userService.is_Tatuador === true) {
          this.router.navigate(['/profile-tatuador-propia']);
        } else {
          this.router.navigate(['/edit-profile-tatuador']);
        }
      } else {
        console.log('Error al iniciar sesión');
        this.userService.logueado = false;
        this.toastr.error('Usuario o contraseña incorrectos', 'Error');
      }
    });
  }

  ngOnInit(): void {}
}
