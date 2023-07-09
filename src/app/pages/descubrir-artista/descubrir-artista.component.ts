import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-descubrir-artista',
  templateUrl: './descubrir-artista.component.html',
  styleUrls: ['./descubrir-artista.component.css']
})
export class DescubrirArtistaComponent implements OnInit {

  public publicaciones: Publicacion[];
  public artistas: User[]

  constructor(private router: Router, public userService: UserService) {
    this.artistas = [];
    this.userService.getArtistas()
    .subscribe((res:Respuesta) => {
      this.artistas = res.data_artistas;
      console.log(res)
    })
  }

  // getTatuador(nickname:string, style:string, studio:string){
  //   let nombre= nickname;
  //   let estudio=studio;
  //   let estilo= style;
  //   console.log(nombre)  
  //   this.userService.buscarTatuador(nombre,)
  //   .subscribe((res: Respuesta)=>
  //   {
  //     if (nickname == "" || nickname == null || nickname == undefined || res.mensaje == "Parece que no hay resultados"){
  //       this.userService.buscarTatuador(nombre,)
  //       .subscribe((res: Respuesta) => {
  //         this.artistas = res.data_artistas;
  //         console.log(res)          
  //       })    
  //     }else{
  //       this.artistas= res.data_artistas;
  //       console.log(this.artistas)
  //       console.log("holaaaaa")
        
  //     }
  //   })
  // }

  goAdd() {
    this.router.navigate(['/add-evento']);
  }

  ngOnInit(): void {}


}



  

 
  

