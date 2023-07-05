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
  constructor(private http : HttpClient, private userService : UserService) {

   }

   getAll(){
    let id_user = this.userService.user.id_user;
    console.log(id_user);
    return this.http.get(this.url+"/"+id_user)
   }


   add(prenda : Prenda){
    return this.http.post(this.url, prenda)
   }

   delete(id_photo : number, id_producto : number ){
    const httpOptions = {headers: null, body:{id_photo: id_photo, id_producto: id_producto}};
    return this.http.delete(this.url, httpOptions)

   }
}
