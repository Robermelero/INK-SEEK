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
  is_Tatuador: boolean=false
  @Input() listaDeCitas : Cita
  constructor(private router: Router, private userService: UserService) {
    this.is_Tatuador = this.userService.getIsTatuador();
  }
  goModificar(){
    this.router.navigate(['/modificar-cita', this.listaDeCitas.id_user])
   
  }

}