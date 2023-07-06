import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class InventarioEquipoService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerInventarioEquipo(){
    return this.http.get(`${this.URL}/inventario_equipo/api`)
  }

  AgregarInventarioEquipo(datos : any){
    return this.http.post(`${this.URL}/inventario_equipo/api`,datos)
  }
  
  EliminarInventarioEquipo(id : number){
    return this.http.delete(`${this.URL}/inventario_equipo/api/${id}/`)
  }


  EliminarTodoInventarioEquipo(){
    return this.http.delete(`${this.URL}/inventario_equipo/api`)
  }

  ActualizarInventarioEquipo(id : number,datos : any){
    return this.http.put(`${this.URL}/inventario_equipo/api/${id}/`,datos)
  }

}
