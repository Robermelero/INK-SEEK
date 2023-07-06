import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  is_Tatuador: boolean
  fecha : Date = new Date(2023, 6, 14, 9, 30, 0)
  horaFinal : string = this.fecha.getHours()+":"+this.fecha.getMinutes()
  citasAgendadas: Cita[];
  constructor() {
   }
  obtenerCitasAgendadas() {
    
    console.log(this.citasAgendadas)
  }


}


