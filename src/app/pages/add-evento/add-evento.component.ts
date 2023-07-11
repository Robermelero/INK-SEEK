import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent {
  public id_user:number



photo:string=""
title:string=""

place:string=""
fecha_inicio:Date
fecha_final:Date
  constructor(public router: Router, public eventsService:EventsService, public userService:UserService) {
    this.id_user=this.userService.user.id_user
    
  }
 


  postEvent() {
    let evento = new Evento(
      this.id_user,
      this.photo,
      this.title,
      this.fecha_inicio,
      this.fecha_final,
      this.place,
      0
    );
    this.eventsService
    .postEvent(this.id_user,this.photo,evento.title, evento.fecha_inicio,evento.fecha_final, evento.place)
    .subscribe((data:any) => {
      if (data && data.error === false && data.eventos){
        const newEvent=data.eventos[0]
        evento.id_evento=newEvent.id_evento
        this.router.navigate(['/tablon']);
      }else{
        this.router.navigate(['/tablon']);
      }
    })

    };
}