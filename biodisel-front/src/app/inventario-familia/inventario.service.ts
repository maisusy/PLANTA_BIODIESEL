import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerInventario(){
    return this.http.get(`${this.URL}/inventario_familia/api`)
  }

  AgregarInventario(datos : any){
    return this.http.post(`${this.URL}/inventario_familia/api`,datos)
  }
  
  EliminarInventario(id : number){
    return this.http.delete(`${this.URL}/inventario_familia/api/${id}/`)
  }


  EliminarTodoInventario(){
    return this.http.delete(`${this.URL}/inventario_familia/api`)
  }

  ActualizarInventario(id : number,datos : any){
    return this.http.put(`${this.URL}/inventario_familia/api/${id}/`,datos)
  }

}
