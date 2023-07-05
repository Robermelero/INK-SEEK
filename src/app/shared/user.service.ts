import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3000';
  public isTatuador: boolean = false;
  public user: User;
  public logueado: boolean = false;

  constructor(private http: HttpClient) {
    this.isTatuador =false;
    this.user = null;
    this.logueado = true;
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }
  setTatuador(isTatuador: boolean) {
    this.isTatuador = isTatuador;
  }
  //FUNCIONALIDAD PARA EDITAR EL PERFIL DEL USUARIO
  public edit (usuario: User){
    let url = `${this.url}/profile`
    return this.http.put(url, usuario)
  }
}
