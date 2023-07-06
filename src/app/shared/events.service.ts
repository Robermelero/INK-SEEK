import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.url}/events`);
  }

  postEvent(id_user: string,photo:string, title: string, date: string,place:string): Observable<any> {
    return this.http.post<any>(`${this.url}/evento/${id_user}`, {id_user, photo,title, date,place });
  }

  deleteEvent(id_evento: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/evento/${id_evento}`);
  }

  searchEvent(search: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.url}/evento/search?search=${search}`);
  }
}
