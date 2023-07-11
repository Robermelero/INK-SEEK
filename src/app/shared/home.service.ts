import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserPhotos(id_user: number): Observable<any> {
    return this.http.get(`${this.url}/home/photos/${id_user}`);
  }
  getFollowedUsers(id_user: number): Observable<any> {
    return this.http.get<any>(`${this.url}/home/followed_Users/${id_user}`);
  } 

  searchPhotos(idUser: number, search: string): Observable<any> {
    return this.http.get(`${this.url}/home/search/${idUser}?q=${search}`);
  }
}
