import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent {
  public id_user:number



photo:string=""
title:string=""
date:string=""
place:string=""
  constructor(public router: Router, public eventsService:EventsService, public userService:UserService) {
    this.id_user=this.userService.user.id_user
    
  }
 


  postEvent() {
    let evento = new Evento(
      this.id_user,
      this.photo,
      this.title,
      this.date,
      this.place,
      0
    );
    this.eventsService
    .postEvent(this.id_user,evento.photo,evento.title, evento.date, evento.place)
    .subscribe((data:any) => {
      if (data && data.error === false && data.eventos){
        const newEvent=data.eventos[0]
        evento.id_evento=newEvent.id_evento
      } 
    })
    };
}
