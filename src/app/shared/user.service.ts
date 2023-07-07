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
  public logueado: boolean = false;
  public idUser: number;

  constructor(private http: HttpClient) {
    this.is_Tatuador
    this.user = new User();
    this.logueado = true;
  }

  obtenerIdCliente(email: string): Observable<any> {
    return this.http.get(`${this.url}/user/${email}`);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }

  editProfile(usuario: User): Observable<any> {
    return this.http.put<any>(`${this.url}/profile`, usuario);
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user);
  }
}
