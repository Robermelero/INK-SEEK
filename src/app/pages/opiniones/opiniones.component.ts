
import { Component, OnInit } from '@angular/core';
import { Opinion } from 'src/app/models/opinion';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent  {
  user: User;
  opiniones: Opinion[] = [];
  showInput: boolean[] = [];
  public id_opiniones: number;
  public emisor: number;
  public receptor: number;
  opinion :Opinion;
 

  constructor(private router: Router, public userService: UserService) {

    this.user = this.userService.user
    // console.log(this.user);
    // this.id_opiniones = this.router.getCurrentNavigation().extras.state['idOpiniones'];
    // this.emisor = this.router.getCurrentNavigation().extras.state['emisor1'];
    // console.log(this.router.getCurrentNavigation().extras.state['receptor']);
    
    // this.receptor = this.router.getCurrentNavigation().extras.state['receptor'];
    this.userService.getOpiniones(this.userService.user.id_user).subscribe((respuesta: Respuesta) => {
      console.log(respuesta.data_opinion);
      this.user.opiniones = respuesta.data_opinion
      
      console.log(respuesta);
      
      
    });
  }

}