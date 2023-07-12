import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Opinion } from '../models/opinion';

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

  public perfilArtista(tatuador: User){
    let url = `${this.url}/profile-tatuador-externa/${tatuador.id_user}`
  return this.http.get(url)
  }

  getTatuadorInfo(){
    return this.http.get(`${this.url}/profile-tatuador-propia/${this.user.id_user}`);
  }

  getTatuadorInfo2(){
    console.log(this.usuarioSeleccionado);    
    return this.http.get(`${this.url}/profile-tatuador-externa/${this.usuarioSeleccionado.id_user}`);
  }
  public checkFollow(id_user: number): Observable<any> {
    const url = `${this.url}/user/check/${this.user.id_user}/${id_user}`;
    return this.http.get<any>(url);
  }
  

  public followUser(id_user: number): Observable<any> {
    const url = `${this.url}/user/${id_user}/follow/`;
    return this.http.post<any>(url, {});
    
  };
    
  public unfollowUser(id_user: number): Observable<any> {
    const url = `${this.url}/user/${id_user}/unfollow`;
    return this.http.post<any>(url, {});
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

  deleteCardPerfil(idPhoto: number){


    let url = (`${this.url}/profile-tatuador-propia`);
    console.log(idPhoto)
    const httpOptions = {headers: null, body:{id_photo : idPhoto}};
    return this.http.delete(url, httpOptions)

  }

  enviarOpinion(opinion: Opinion) {
    const url = `${this.url}/estrellas`;
    return this.http.post(url, opinion);
  }

  borrarOpinion(idOpinion: number){
    let url = (`${this.url}/estrellas`);
    let httpOptions = {headers: null, body:{id_opiniones : idOpinion}};
    return this.http.delete(url, httpOptions)
  }

  getOpiniones(receptor: number) {
    
    const url = `${this.url}/opiniones/${receptor}`;
    return this.http.get(url);

  }

}


