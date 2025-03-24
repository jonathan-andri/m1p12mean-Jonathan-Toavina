import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Mechanic } from '../../models/mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  apiUrl = `${environment.apiUrl}/users`  
  constructor(private http: HttpClient) {}

  addMechanic(mechanic: Mechanic): Observable<any>{
    return this.http.post(this.apiUrl, mechanic)
  }

  getMechanicByid(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  getAllMechanics(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

  updateMechanic(mechanic: Mechanic, id: string): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, mechanic)
  }

  deleteMechanic(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
