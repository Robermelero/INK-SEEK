import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
// import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  email: string;
  password: string;
  
  constructor(private router: Router) {}
  goHome(){
    this.router.navigate(['/home'])
  }

}

