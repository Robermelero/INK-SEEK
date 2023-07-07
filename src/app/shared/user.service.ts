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
  // login(email: string, password: string): Observable<any> {
  //   const url = `${this.url}/login`;
  //   const body = { email, password };
  //   return this.http.post<any>(url, body);
  // }
   public login (user:User){
    let url = `${this.url}/login`;
    return this.http.post(url,user);
  }

  getTatuadorInfo(){
    console.log("caca");
    console.log(this.user);
    
    return this.http.get(`${this.url}/profile-tatuador-propia/${this.user.id_user}`);
  }

  deleteCardPerfil(id_photo: number): Observable<any> {
    let url = (`${this.url}/profile-tatuador-propia/${id_photo}`);
    return this.http.delete(url)

  }
  
  }



  