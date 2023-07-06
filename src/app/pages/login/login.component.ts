import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('volar', [
      state('inicial', style({
        transform: 'translateY(0)'
      })),
      state('final', style({
        transform: 'translateY(-85vh)'
      })),
      transition('inicial => final', animate('4s 0.5s')),
    ]),
    trigger('aparecer', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate('5s 1.5s')),
    ])
  ]
})
export class LoginComponent implements OnInit {
 
  // email: string;
  // password: string;
  
  // constructor(private userService: UserService, private router: Router) {}
  
  // onSubmit(form: NgForm): void {
  //   this.email = form.value.email;
  //   this.password = form.value.password;
    
  
  //   this.userService.login(this.email, this.password).subscribe({
  //     next: (response: Respuesta) => {
  //       if (response.mensaje === 'se ha iniciado sesion') {
  //         console.log('se ha iniciado sesion');
  //         this.router.navigate(['/home']);
  //       } else {
  //         console.error('Error en el inicio de sesión:', response.error);
  //       }
  //     },
  //     error: (error: any) => {
  //       console.error('Error en el inicio de sesión:', error);
  //     }
  //   });
  // }
  // ngOnInit(): void 
  // {
    
  // }
  
    public user: User;
  constructor(public userService: UserService, public router: Router){
    this.user = new User()
  }

  onSubmit(form:NgForm){
    console.log('Botón presionado');
    this.userService.login(this.user)
    .subscribe((res: Respuesta) =>
    {
      console.log(res)
      if(res.mensaje === "Los datos son correctos" ){
        console.log(res.mensaje)
        this.userService.logueado = true;
        this.userService.user = res.data_user[0];
        console.log(this.userService.user);
        this.router.navigateByUrl('/home')
          if(res.data_user[0].is_Tatuador===1){
            this.userService.is_Tatuador=true
          }
          else{
            this.userService.is_Tatuador=false
          }
          if(this.userService.is_Tatuador===true){
            this.router.navigate(['/profile-tatuador-propia'])
          }
          else{
            this.router.navigate(['/edit-profile-tatuador'])
          }
      }else{
        console.log("Error al inciar sesión");
        this.userService.logueado = false;
      }
    })
  }

  ngOnInit(): void {
    
  }
}









