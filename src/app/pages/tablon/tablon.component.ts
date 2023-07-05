import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-tablon',
  templateUrl: './tablon.component.html',
  styleUrls: ['./tablon.component.css']
})
export class TablonComponent implements OnInit{
  public eventos: Evento [];
  is_Tatuador: boolean = false;

  constructor(private router: Router, private userService: UserService){
    this.is_Tatuador = this.userService.getIsTatuador();
    this.eventos = [
        new Evento (1, "https://cdntattoofilter.com/event/18061/s.jpg", "8º Asturias Tattoo Expo", "30 JUN - 02 JUL", "Gijón, Asturias"),
        new Evento (2, "https://cdntattoofilter.com/event/18184/s.jpg", "4th Ibiza Tattoo Convention", "08 - 10 SEP", "Ibiza, Islas Baleares"),
        new Evento (3, "https://cdntattoofilter.com/event/18246/s.jpg", "Gaia Tattoo Expo", "15 - 17 SEP", "Zaragoza, Aragón"),
        // new Evento (4, "https://cdntattoofilter.com/event/17902/s.jpg", "26th Barcelona Tattoo Expo", "06 - 08 OCT", "Barcelona, Cataluña")
    ]
 
   }

   goAdd(){
    this.router.navigate(['/add-evento'])
  }
  
  ngOnInit(): void{}
}
