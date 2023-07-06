
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  addCita(cita: Cita): Observable<any> {
    return this.http.post<any>(`${this.url}/add-cita`, cita);
  }
}