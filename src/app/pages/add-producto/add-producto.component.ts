import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prenda } from 'src/app/models/prenda';
import { Respuesta } from 'src/app/models/respuesta';
import { TiendaService } from 'src/app/shared/tienda.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  constructor(private router: Router, 
              public tiendaService : TiendaService,
              public userService : UserService,) {}
  
  goTienda(){
    this.router.navigate(['/tienda'])
  }

  public addProducto(newName : HTMLInputElement, newPhoto : HTMLInputElement){


    let nombre = newName;
    let foto = newPhoto;


    let producto : Prenda ={
      id_user : this.userService.user.id_user,
      name : nombre.value,
      photo : foto.value
    }
    this.tiendaService.add(producto).subscribe((respuesta : Respuesta)=>{
      
      if(respuesta.data_prenda){
        console.log("prenda añadida correctamente")
      }
    })
    this.router.navigate(['/tienda'])
  }

}
