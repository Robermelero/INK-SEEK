import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3306';
  public logueado: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {
    this.logueado = false;
    this.user = new User;
  }

  login(user: User) {
    return this.http.post(`${this.url}/login`, user);
  }

}