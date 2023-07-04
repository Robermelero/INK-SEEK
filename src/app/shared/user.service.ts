import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Tatuador } from '../models/tatuador';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:4000';
  public isTatuador: boolean = false;
  public user: User 
  public logueado: boolean = true;
  public tatuador: Tatuador;

  constructor(private http: HttpClient) {
    this.isTatuador = true;
    this.logueado = true;
    this.user;
    console.log(this.user);
    this.user = new User (1, "Alba", "Carranza", "alba@gmail.com", "https://www.freepik.es/fotos-vectores-gratis/cara-mujer","12345678", "si" )
    // this.tatuador = new Tatuador ()
    
  };  

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }
  setTatuador(isTatuador: boolean) {
    this.isTatuador = isTatuador;
  }

  // getInfoTatuador(): Observable<any>{
  //   let id_user = this.user.id_user;
  //   return this.http.get(this.url+'/'+id_user);
  // }
  //FUNCIONALIDAD PARA EDITAR EL PERFIL DEL USUARIO
  public edit (usuario: User){
    let url = `${this.url}/profile`
    return this.http.put(url, usuario)
  }
}
