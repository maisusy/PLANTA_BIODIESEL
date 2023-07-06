import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class InventarioFamiliaService {

  private URL: string = "";

  constructor( private http: HttpClient) {
    this.URL = environment.apiURL
  }

  obtenerInventarioFamilia(){
    return this.http.get(`${this.URL}/inventario_familia/api`)
  }

  AgregarInventarioFamilia(datos : any){
    return this.http.post(`${this.URL}/inventario_familia/api`,datos)
  }
  
  EliminarInventarioFamilia(id : number){
    return this.http.delete(`${this.URL}/inventario_familia/api/${id}/`)
  }


  EliminarTodoInventarioFamilia(){
    return this.http.delete(`${this.URL}/inventario_familia/api`)
  }

  ActualizarInventarioFamilia(id : number,datos : any){
    return this.http.put(`${this.URL}/inventario_familia/api/${id}/`,datos)
  }

}
