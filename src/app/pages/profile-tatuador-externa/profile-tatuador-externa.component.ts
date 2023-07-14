import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { Publicacion } from 'src/app/models/publicacion';
import { Respuesta } from 'src/app/models/respuesta';
import { RespuestaChat } from 'src/app/models/respuesta-chat';
import { User } from 'src/app/models/user';
import { ChatsService } from 'src/app/shared/chats.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-tatuador-externa',
  templateUrl: './profile-tatuador-externa.component.html',
  styleUrls: ['./profile-tatuador-externa.component.css']
})
export class ProfileTatuadorExternaComponent {
  public publicaciones: Publicacion[] = [];
  
  public usuarioSeleccionado: User;
  public chatCreado : Chat

  constructor(private router: Router, public userService: UserService, public chatService: ChatsService) {
    
    this.usuarioSeleccionado = this.userService.usuarioSeleccionado; 
    this.userService.getTatuadorInfo2().subscribe((respuesta: Respuesta) => {
    this.usuarioSeleccionado.publicaciones = respuesta.data_foto;

      });  
  }
  toggleFollow() {
    if (this.userService.usuarioSeleccionado.seguido) {
      this.unfollowUser(this.usuarioSeleccionado.id_user);
    } else {
      this.followUser(this.usuarioSeleccionado.id_user);
    }
  }
  
  followUser(id_user: number) {
    this.userService.followUser(id_user).subscribe(
      (response) => {
        this.userService.usuarioSeleccionado.seguido = true;
      }
    );
  }
  
  unfollowUser(id_user: number) {
    this.userService.unfollowUser(id_user).subscribe(
      (response) => {
        this.userService.usuarioSeleccionado.seguido = false;
      }
    );
  }
  
  quitarCaja(){
    }
  
  ngOnInit(): void {
    // this.usuarioSeleccionado = this.userService.usuarioSeleccionado;
  }
  crearChat(){
  

      this.chatCreado  = new Chat (0,this.userService.user.id_user,
      this.userService.usuarioSeleccionado.id_user,
      false, 
      this.userService.usuarioSeleccionado.photo,
      this.userService.usuarioSeleccionado.name,
      )

    console.log(this.chatCreado);
    console.log(this.chatCreado.id_user1);
    console.log(this.chatCreado.id_user2);
    this.chatService.postChat(this.chatCreado).subscribe((respuestaChat : RespuestaChat)=>{
      console.log(respuestaChat.id_chat)
      this.chatCreado.id_chat = respuestaChat.id_chat;
      this.chatService.chat = this.chatCreado;
      this.router.navigate(["conversacion-chat"]);
 // this.router.navigate(["conversacion-chat"], {state: {idchat: respuestaChat, photo1 : chatCreado.photo, name1 : chatCreado.name}})
    })
  }
  goOpiniones(id_user: number){
    
    this.router.navigate(["opiniones"])
  }


  verTienda(){
    this.userService.getInfoArtista(this.userService.usuarioSeleccionado.id_user)
    .subscribe((respuesta : Respuesta) => {
      this.userService.usuarioSeleccionado = respuesta.data_user[0]
      this.router.navigate(['tienda-externa']);
      console.log(respuesta.data_user);
    })
  }
}