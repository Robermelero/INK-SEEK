import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/models/user'
import { Tatuador } from 'src/app/models/tatuador';
import { Router } from '@angular/router';
@Component({
  selector: 'app-conversacion-chat',
  templateUrl: './conversacion-chat.component.html',
  styleUrls: ['./conversacion-chat.component.css']
})
export class ConversacionChatComponent {
  public nuevoMensaje 
  // public tatuador : Tatuador
  // public user : User
  // public mensajes: any =[
  //   {emisor : "id_user",
  //   mensaje : "Hola!"},
  //   {emisor : "id_tatuador",
  //   mensaje : "Hola!"},
  //   {emisor : "1",
  //   mensaje : "Queria preguntarte acerca de poder pedir cita contigo para tatuarme!"},
  //   {emisor : "2",
  //   mensaje : "Claro!, dime que quieres y podemos irlo viendo"},
  //   {emisor : "1",
  //   mensaje : "Pues mira, quiero una polilla como el logo de INK-SEEK, no se si lo conoces"},
  //   {emisor : "2",
  //   mensaje : "Obvio que si!, esta muy chulo el diseño!"},
  //   {emisor : "1",
  //   mensaje : "Hola!"},
  //   {emisor : "2",
  //   mensaje : "Hola!"},
  // ]
  constructor(private router: Router){

  }


  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje =""
  }
  goChats(){
    this.router.navigate(['/chats'])
  }
}
