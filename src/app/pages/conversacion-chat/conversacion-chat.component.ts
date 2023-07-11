import { Component, ElementRef, OnInit } from '@angular/core';
import { User} from 'src/app/models/user'
import { Tatuador } from 'src/app/models/tatuador';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { UserService } from 'src/app/shared/user.service';
import { ChatsService } from 'src/app/shared/chats.service';
import { RespuestaConversacion } from 'src/app/models/respuesta-conversacion';
import { Chat } from 'src/app/models/chat';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-conversacion-chat',
  templateUrl: './conversacion-chat.component.html',
  styleUrls: ['./conversacion-chat.component.css']
})
export class ConversacionChatComponent implements OnInit {
  public nuevoMensaje : Mensaje;
  public tatuador : Tatuador;
  public user : User;
  public mensajes: Mensaje[];
  public id_chat : number;
  public photo : string;
  public name : string;
  @ViewChild ("mensaje") private ultimoMensaje : ElementRef



  constructor(private router: Router,
              public userService : UserService,
              public chatService : ChatsService,
              )
              {
              console.log(this.router.getCurrentNavigation().extras.state['idchat'])
              this.id_chat = this.router.getCurrentNavigation().extras.state['idchat']
              this.photo =  this.router.getCurrentNavigation().extras.state['photo1']
              this.name =  this.router.getCurrentNavigation().extras.state['name1']
  }


  ngOnInit(): void {


    this.chatService.getMensaje(this.id_chat).subscribe((respuestaMensaje : RespuestaConversacion)=>{
      this.mensajes = respuestaMensaje.data_mensaje
      
      console.log(respuestaMensaje)
      console.log(this.id_chat)
      
    })
  }

  enviarMensaje(mensajeBody : HTMLInputElement){
    // console.log(this.nuevoMensaje);

    let mensajeEnviado = mensajeBody
  let mensaje : Mensaje = {
     id_chat : this.id_chat ,
     id_participante: this.userService.user.id_user,    
     mensaje : mensajeEnviado.value
  }
  console.log(mensaje)
  console.log(mensaje.id_chat)
  this.chatService.postMensaje(mensaje).subscribe((respuestaMensaje : RespuestaConversacion)=>{
    this.mensajes.push(mensaje)
  })

  this.scrollToTheLastElemenByClassName()
  }
  goChats(){
    this.router.navigate(['/chats'])
  }
  scrollToTheLastElemenByClassName(){
    let elements = document.getElementsByClassName('msj')
    let ultimo : any = elements[(elements.length - 1)];
    let toppos = ultimo.offsetTop;


    document.getElementById('contenedor_conversacion').scrollTop = toppos
  }

  
}
