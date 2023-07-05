import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent {
photo:string=""
title:string=""
date:string=""
place:string=""
  constructor(private router: Router, private eventsService:EventsService) {}
  

  postEvent() {
    let evento = new Evento(
      0,
      this.title,
      this.date,
      this.photo,
      this.place,
      0
    );
    this.eventsService
    .postEvent("3",evento.title,evento.date, evento.photo, evento.place)
    .subscribe((data:any) => {
      if (data && data.error === false && data.eventos){
        const newEvent=data.eventos[0]
        evento.id_evento=newEvent.id_evento
      } 
    })
    };
}
