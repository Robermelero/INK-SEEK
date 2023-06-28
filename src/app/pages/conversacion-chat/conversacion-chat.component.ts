import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/models/user'
import { Tatuador } from 'src/app/models/tatuador';
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
  //   {emisor : "1",
  //   mensaje : "Hola!"},
  //   {emisor : "2",
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
  // constructor(){
  //   this.user = new User (1,"Alba", "Ricoque", "alba1234", 1234,"/assets/chat-registro/albaricoque.png")
  //   this.tatuador = new Tatuador(2,"rober","Melero","12344",1234)
  // }


  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje =""
  }
}
