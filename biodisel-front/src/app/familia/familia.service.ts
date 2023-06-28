import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerFamilia(){
    return this.http.get(`${this.URL}/familia/api`)
  }

  AgregarFamilia(datos : any){
    return this.http.post(`${this.URL}/familia/api`,datos)
  }
  
  EliminarFamilia(id : number){
    return this.http.delete(`${this.URL}/familia/api/${id}/`)
  }

  ActualizarFamilia(id : number,datos : any){
    return this.http.delete(`${this.URL}/familia/api/${id}/`,datos)
  }

}
