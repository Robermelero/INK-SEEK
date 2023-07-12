import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserPhotos(id_user: number): Observable<any> {
    return this.http.get(`${this.url}/home/photos/${id_user}`);
  }

  searchPhotos(id_user: number, search: string): Observable<any> {
    return this.http.get(`${this.url}/home/search/${id_user}/${search}`)
  }
}
