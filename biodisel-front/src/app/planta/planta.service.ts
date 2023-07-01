import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerPlanta(){
    return this.http.get(`${this.URL}/plata/api`)
  }

  AgregarPlanta(datos : any){
    return this.http.post(`${this.URL}/plata/api`,datos)
  }
  
  EliminarPlanta(id : number){
    return this.http.delete(`${this.URL}/plata/api/${id}/`)
  }

  ActualizarPlanta(id : number,datos : any){
    return this.http.put(`${this.URL}/plata/api/${id}/`,datos)
  }

}
