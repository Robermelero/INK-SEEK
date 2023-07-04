import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email: string;
  password: string;
  
  constructor(private userService: UserService, private router: Router) {}
  
  onSubmit(form:NgForm): void {
    this.userService.login(this.email, this.password).subscribe({
      next: (response: Respuesta) => {
        if (response.mensaje === 'Inicio de sesión exitoso') {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        } else {
          console.error('Error en el inicio de sesión:', response.error);
        }
      },
      error: (error: any) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
  ngOnInit(): void 
  {
    
  }
}









