import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  @Input() listaDeCitas : Cita
  constructor(private router: Router) {}
  goModificar(){
    this.router.navigate(['/modificar-cita', this.listaDeCitas.id_user])
  }

}