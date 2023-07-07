import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3000';
  public is_Tatuador: boolean;
  public user: User;
  public logueado: boolean = true;

  constructor(private http: HttpClient) {
    this.is_Tatuador;
    this.user = new User();
    this.logueado = true;
  }


 

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }
  //FUNCIONALIDAD PARA EDITAR EL PERFIL DEL USUARIO
  public edit (usuario: User){
    let url = `${this.url}/profile`
    return this.http.put(url, usuario)
  }

  //LOGIN
 
   public login (user:User){
    let url = `${this.url}/login`;
    return this.http.post(url,user);
  }

  public followUser(id_user: number): Observable<any> {
    console.log('holaaaa');
    const url = `${this.url}/user/${id_user}/follow/`;
    console.log(id_user);
    return this.http.post<any>(url, {});
  }
  
  public unfollowUser(id_user: number): Observable<any> {
    console.log('adiooooos');
    const url = `${this.url}/user/${id_user}/unfollow`;
    console.log(url);
    return this.http.post<any>(url, {});
  }
  
 
}


