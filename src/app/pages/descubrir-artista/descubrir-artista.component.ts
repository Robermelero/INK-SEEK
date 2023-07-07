// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Publicacion } from 'src/app/models/publicacion';
// import { UserService } from 'src/app/shared/user.service';
// import { Respuesta } from 'src/app/models/respuesta';
// import { User } from 'src/app/models/user';

// @Component({
//   selector: 'app-descubrir-artista',
//   templateUrl: './descubrir-artista.component.html',
//   styleUrls: ['./descubrir-artista.component.css']
// })
// export class DescubrirArtistaComponent implements OnInit {

//   public publicaciones: Publicacion[];
//   public artistas: User[]

  // constructor(private router: Router, public userService: UserService) {
  //   this.artistas = [];
  //   this.userService.getArtistas()
  //   .subscribe((res:Respuesta) => {
  //     this.artistas = res.data;
  //     console.log(res.data)
  //   })
  // }

  // getTatuador(nickname:string, style:string, studio:string){
  //   let nombre= nickname;
  //   let estudio=studio;
  //   let estilo= style;
  //   console.log(nombre)  
  //   this.userService.buscarTatuador(nombre,estudio,estilo)
  //   .subscribe((res: Respuesta)=>
  //   {
  //     if (nickname == "" || nickname == null || nickname == undefined || res.mensaje == "Parece que no hay resultados"){
  //       this.userService.buscarTatuador(nombre,estudio,estilo)
  //       .subscribe((res: Respuesta) => {
  //         this.artistas = res.data_tatuador;
  //         console.log(res)          
  //       })    
  //     }else{
  //       this.artistas= res.data_tatuador;
  //       console.log(this.artistas)
  //       console.log("holaaaaa")
        
  //     }
  //   })
  // }

  // buscarTatuador(nickname: string) {
  //   this.userService.getTatuador(nickname).subscribe(
  //     (response: any) => {
  //       if (response.error) {
  //         // No se encontraron tatuadores
  //         console.log(response.mensaje);
  //       } else {
  //         // Tatuadores encontrados
  //         const tatuadores = response.data;
  //         console.log(tatuadores);
  //         // Aquí puedes realizar las operaciones necesarias con los tatuadores encontrados
  //       }
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

//   goAdd() {
//     this.router.navigate(['/add-evento']);
//   }

//   ngOnInit(): void {}
// }
