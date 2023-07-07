import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserPhotos(idUser1: number, idUser2: number): Observable<any> {
    return this.http.get(`${this.url}/user/${idUser1}/following/${idUser2}/photos`);
  }

  searchPhotos(idUser: number, searchTerm: string): Observable<any> {
    return this.http.get(`${this.url}/user/${idUser}/search?q=${searchTerm}`);
  }
}
