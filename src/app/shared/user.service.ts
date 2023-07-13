import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Opinion } from '../models/opinion';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = 'http://localhost:3000';
  public is_Tatuador: boolean;
  public user: User;
  public logueado: boolean = false;
  public artistas: User[];
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

  public edit(usuario: User): Observable<any> {
    let url = `${this.url}/edit-profile-tatuador`;
    return this.http.put(url, usuario);
  }

  public login(user: User): Observable<any> {
    let url = `${this.url}/login`;
    return this.http.post(url, user);
  }

  public getArtistas(): Observable<any> {
    let url = `${this.url}/descubrir-artista`;
    return this.http.get(url);
  }

  public perfilArtista(tatuador: User): Observable<any> {
    let url = `${this.url}/profile-tatuador-externa/${tatuador.id_user}`;
    console.log(url);
    return this.http.get(url);
  }

  public getTatuadorInfo(): Observable<any> {
    console.log("caca");
    console.log(this.user);
    return this.http.get(`${this.url}/profile-tatuador-propia/${this.user.id_user}`);
  }

  public getTatuadorInfo2(): Observable<any> {
    console.log("caca");
    console.log(this.usuarioSeleccionado);
    return this.http.get(`${this.url}/profile-tatuador-externa/${this.usuarioSeleccionado.id_user}`);
  }

  public checkFollow(id_user: number): Observable<any> {
    console.log('checkFollow llamado con id_user:', id_user);
    const url = `${this.url}/user/check/${this.user.id_user}/${id_user}`;
    console.log('URL:', url);
    return this.http.get<any>(url).pipe(
      map((response) => response.isFollowed)
    );
  }

  public followUser(id_user: number): Observable<any> {
    console.log(id_user);
    const url = `${this.url}/user/follow/${this.user.id_user}/${id_user}`;
    return this.http.post<any>(url, {});
  }

  public unfollowUser(id_user: number): Observable<any> {
    console.log(id_user);
    const url = `${this.url}/user/unfollow/${this.user.id_user}/${id_user}`;
    return this.http.post<any>(url, {});
  }

  public getCitas(user: number): Observable<any> {
    return this.http.get(`${this.url}/citas/${user}`);
  }

  public buscarTatuador(inputValue: string): Observable<any> {
    let url = `${this.url}/explorar?nickname=${inputValue}&style=${inputValue}&studio=${inputValue}`;
    return this.http.get(url);
  }

  public deleteCardPerfil(idPhoto: number): Observable<any> {
    console.log('servicio');
    let url = `${this.url}/profile-tatuador-propia`;
    console.log(idPhoto);
    const httpOptions = { headers: null, body: { id_photo: idPhoto } };
    return this.http.delete(url, httpOptions);
  }

  public enviarOpinion(opinion: Opinion): Observable<any> {
    const url = `${this.url}/estrellas`;
    return this.http.post(url, opinion);
  }

  public borrarOpinion(idOpinion: number): Observable<any> {
    let url = `${this.url}/estrellas`;
    let httpOptions = { headers: null, body: { id_opiniones: idOpinion } };
    return this.http.delete(url, httpOptions);
  }

  public getOpiniones(receptor: number): Observable<any> {
    const url = `${this.url}/opiniones/${receptor}`;
    return this.http.get(url);
  }
}