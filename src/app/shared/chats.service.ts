import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Chat } from '../models/chat';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
 private url = "http://localhost:3000/chat";
 private url2 = "http://localhost:3000/chats";
 public user : User;
 public chat : Chat;
 public mensaje : Mensaje;
//  public id_chat : number
  constructor(private http : HttpClient, public userService : UserService) {
    this.chat = new Chat ();
    this.mensaje = new Mensaje ();
    console.log(this.chat);
    console.log(this.mensaje)
   }



  getConversaciones(){
    
    console.log("ENTROOOOOOOOOOOOOOOOOOOOOO")
    let iduser = this.userService.user.id_user;
    console.log(iduser);
    return this.http.get(this.url2+"/"+iduser)
  }


  getMensaje(id_chat : number){
    console.log("MENSAJEEEEEEEEEEEEEEEEEEEEEEES")
    return this.http.get(this.url+"/"+id_chat)
  }

  getOneChat(name : string){
    console.log("ENCONTRADOOOOOOOOO")
    
    let iduser = this.userService.user.id_user
  
    return this.http.get(this.url2+"/"+iduser+"/"+name)
  }

  postMensaje(mensaje : Mensaje){
    console.log("MENSAJE ENVIADO")
    console.log(mensaje);
    return this.http.post(this.url, mensaje)
  }
  
  deleteChat(idChat : number){
    console.log("borrado")
    const httpOptions = {headers: null, body:{id_chat : idChat}};
    return this.http.delete(this.url2, httpOptions)
  }

}
