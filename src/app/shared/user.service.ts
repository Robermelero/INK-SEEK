import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}/registro`, user);
  }
}