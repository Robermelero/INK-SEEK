import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = 'http://localhost:3000';
  public is_Tatuador: boolean;
  public user: User;
  public logueado: boolean = false;
  public artistas : User [];
  public id_user: number;

  constructor(private http: HttpClient) {
    this.is_Tatuador = true;
    this.user = new User();
    this.logueado = true;
  }
// OBTENER EL ID DE UN USER DESDE SU EMAIL///
  obtenerIdCliente(email: string): Observable<any> {
    return this.http.get(`${this.url}/user/${email}`);
  }
 //REGISTRO DE USUARIOS///
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }
  //FUNCIONALIDAD PARA EDITAR EL PERFIL DEL USUARIO
  public edit (usuario: User){
    let url = `${this.url}/edit-profile-tatuador`
    return this.http.put(url, usuario)
  }
//LOGIN//
  public login (user:User){
    let url = `${this.url}/login`;
    return this.http.post(url,user);
  }
 //ARTISTAS EXPLORA
 public getArtistas(){
  let url = `${this.url}/descubrir-artista`
  return this.http.get(url)
  }
  //BUSCAR CITAS POR ID LOGUEADO
  public getCitas(user: number): Observable<any> {
    return this.http.get(`${this.url}/citas/${user}`);
  }

// BUSCAR TATUADOR//
public buscarTatuador(inputValue: string): Observable<any> {
  let url = `${this.url}/explorar?nickname=${inputValue}&style=${inputValue}&studio=${inputValue}`;
  return this.http.get(url);
}

}


