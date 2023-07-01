import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerSector(){
    return this.http.get(`${this.URL}/sector/api`)
  }

  AgregarSector(datos : any){
    return this.http.post(`${this.URL}/sector/api`,datos)
  }
  
  EliminarSector(id : number){
    return this.http.delete(`${this.URL}/sector/api/${id}/`)
  }

  ActualizarSector(id : number,datos : any){
    return this.http.put(`${this.URL}/sector/api/${id}/`,datos)
  }


}
