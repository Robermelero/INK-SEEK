import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  is_Tatuador: boolean;
  @Input() listaDeCitas : Cita []
  constructor(private router: Router,public userService:UserService) {
    this.is_Tatuador = userService.is_Tatuador;
  }
  goModificar(){
    this.router.navigate(['/modificar-cita', this.listaDeCitas])
   
  }

}