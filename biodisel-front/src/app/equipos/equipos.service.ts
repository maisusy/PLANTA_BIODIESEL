import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerEquipos(){
    return this.http.get(`${this.URL}/equipos/api`)
  }

  AgregarEquipos(datos : any){
    return this.http.post(`${this.URL}/equipos/api`,datos)
  }
  
  EliminarEquipos(id : number){
    return this.http.delete(`${this.URL}/equipos/api/${id}/`)
  }

  ActualizarEquipos(id : number,datos : any){
    return this.http.put(`${this.URL}/equipos/api/${id}/`,datos)
  }


}
