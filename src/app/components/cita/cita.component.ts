import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  @Input() listaDeCitas : Cita



}