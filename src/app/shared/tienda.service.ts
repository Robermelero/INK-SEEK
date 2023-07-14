import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url = "http://localhost:3000/tienda"
  private url2 = "http://localhost:3000/tiendas"
  public prenda : Prenda
  constructor(private http : HttpClient, private userService : UserService) {
      this.prenda = new Prenda();
   }

   getAll(id_user : number){
    
    console.log(id_user);
    return this.http.get(this.url+`?id_user=${id_user}`)
   }

   getAllUserExterno(id_user : number){
    console.log(id_user)
    return this.http.get(this.url2+`?id_user=${id_user}`)
   }


   add(prenda : Prenda) : any{
    // let iduser = this.userService.user.id_user;
    console.log(prenda)
   
    return this.http.post(this.url, prenda)
   }

   delete(idPhoto:number){
    console.log('servicio');
    
    console.log(idPhoto)
    const httpOptions = {headers: null, body:{id_photo : idPhoto}};
    return this.http.delete(this.url, httpOptions)

  }
   }
  
