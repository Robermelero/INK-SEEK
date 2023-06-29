import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  isTatuador = true
  citasAgendadas: Cita[];
  fecha : Date = new Date(2023, 6, 14, 9, 30, 0)
  horaFinal : string = this.fecha.getHours()+":"+this.fecha.getMinutes()
  obtenerCitasAgendadas() {
    this.citasAgendadas = [
      { id_user: 1,user_name: 'John Doe', date : this.fecha, hora: this.horaFinal},
      { id_user: 1,user_name: 'John Doe', date: this.fecha, hora: this.horaFinal},
      {  id_user: 1,user_name: 'Doe', date: this.fecha, hora : this.horaFinal}
    ];
    console.log(this.citasAgendadas)
  }


}