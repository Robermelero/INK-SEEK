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

  getTatuador(inputValue: string) {
    this.userService.buscarTatuador(inputValue).subscribe(
      (response: any) => {
        this.artistas = response.data;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  goAdd() {
    this.router.navigate(['/add-evento']);
  }

  ngOnInit(): void {}


}



  

 
  

