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
  is_Tatuador: boolean;
  citasAgendadas: Cita[];
  fecha : Date = new Date(2023, 6, 14, 9, 30, 0)
  horaFinal : string = this.fecha.getHours()+":"+this.fecha.getMinutes()

  constructor(public userService:UserService){
    this.is_Tatuador = userService.is_Tatuador;
  }
  obtenerCitasAgendadas() {
    
    console.log(this.citasAgendadas)
  }


}


