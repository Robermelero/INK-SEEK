import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { debounceTime } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.css']
})
export class TablonComponent implements OnInit{
  public eventos: Evento [];
  is_Tatuador: boolean = true;
  search:string="";
  id_user:number

  constructor(private router: Router, private eventService:EventsService, private userService:UserService,private toastrService:ToastrService){
    this.id_user=this.userService.user.id_user
   }
   public deleteEvent(evento:Evento){
    this.eventService.deleteEvent(evento.id_evento).subscribe(()=>{
      this.eventos=this.eventos.filter((newEvento)=>newEvento.id_evento!==evento.id_evento);
      this.toastrService.show("Evento borrado",null, {toastClass:"toast1"})
      })
    }
    
   goAdd(){
    this.router.navigate(['/add-evento'])
  }
  
  ngOnInit(): void{
    this.eventService.getEvents().subscribe(
      (response:any)=>{
        this.eventos = response.eventos[0]
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  searchEvent() {
    this.eventService.searchEvent(this.search).pipe(debounceTime(300)).subscribe(
      (response: any) => {
        this.eventos = response.eventos[0];
      },
      (error) => {
        console.log(error);
      });
    }
  }





   // this.eventos = [
    //     new Evento (1, "https://cdntattoofilter.com/event/18061/s.jpg", "8º Asturias Tattoo Expo", "30 JUN - 02 JUL", "Gijón, Asturias"),
    //     new Evento (2, "https://cdntattoofilter.com/event/18184/s.jpg", "4th Ibiza Tattoo Convention", "08 - 10 SEP", "Ibiza, Islas Baleares"),
    //     new Evento (3, "https://cdntattoofilter.com/event/18246/s.jpg", "Gaia Tattoo Expo", "15 - 17 SEP", "Zaragoza, Aragón"),
    //     // new Evento (4, "https://cdntattoofilter.com/event/17902/s.jpg", "26th Barcelona Tattoo Expo", "06 - 08 OCT", "Barcelona, Cataluña")
    // ]