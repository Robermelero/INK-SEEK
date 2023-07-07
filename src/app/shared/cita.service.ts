
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

  addCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.url}/add-cita`, cita);
  }
  updateCita(cita:Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.url}/cita/${cita.id_cita}`, cita);
  }
  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.url}/citas`);
  }

  
}
