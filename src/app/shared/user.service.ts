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
  public idUser: number;
  public usuarioSeleccionado: User;

  constructor(private http: HttpClient) {
    this.is_Tatuador;
    this.user = new User();
    this.logueado = true;
  }

  obtenerIdCliente(email: string): Observable<any> {
    return this.http.get(`${this.url}/user/${email}`);
  }

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

  public perfilArtista(tatuador: User){
    let url = `${this.url}/profile-tatuador-externa/${tatuador.id_user}`
    console.log(url)
  return this.http.get(url)
  }

  getTatuadorInfo(){
    console.log("caca");
    console.log(this.user);    
    return this.http.get(`${this.url}/profile-tatuador-propia/${this.user.id_user}`);
  }

  getTatuadorInfo2(){
    console.log("caca");
    console.log(this.usuarioSeleccionado);    
    return this.http.get(`${this.url}/profile-tatuador-externa/${this.usuarioSeleccionado.id_user}`);
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

  deleteCardPerfil(id_photo: number): Observable<any> {
    let url = (`${this.url}/profile-tatuador-propia/${id_photo}`);
    return this.http.delete(url)

  }
}
 