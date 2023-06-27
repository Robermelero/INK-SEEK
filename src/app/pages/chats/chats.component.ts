import { Component } from '@angular/core';
import { Conversacion } from 'src/app/models/conversacion';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
    public chats : Conversacion[];

    constructor(){
      this.chats = [
        new Conversacion(1, "/assets/chat-registro/albaricoque.png","Albaricoque 33"),
        new Conversacion(2,"/assets/chat-registro/alex.png", "Dr. Planelles"),
        new Conversacion(3,"/assets/chat-registro/dani.png", "Picatostes"),
        new Conversacion(4, "/assets/chat-registro/maritere.png", "La Mari Tere"),
        new Conversacion(5, "/assets/chat-registro/leo.png", "Leowo >:D")
      ]
    }
}
