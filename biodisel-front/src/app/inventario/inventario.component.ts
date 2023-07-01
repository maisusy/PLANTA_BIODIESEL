import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InventarioService } from './inventario.service'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class InventarioComponent implements OnInit {

  public Inventarios : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public InventarioService : InventarioService,
    private config: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.config.setTranslation({
      'startsWith' : 'Que comienze con',
      'contains' : 'Que Contenga',
      'notContains' : 'Que NO contenga',
      'endsWith' : 'Que finalize con',
      'equals' : 'Que sea igual a',
      'notEquals' : 'Que NO sea igual a',
      'noFilter' : 'Sin filtros'

    })
    this.ObtenerInventarios()
  
  }

  success(){
    
    this.modal = '';
    this.ObtenerInventarios()
  }

  MODAL(tipo : string , modal : any = null ){
    this.modal = tipo;
    this.modalDatos = modal;
  }

  Confirmar(event : Event, id : number ){
    console.log(id);
      this.confirmationService.confirm({
        target: event.target!,
          message: '¿Estas seguro?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.Eliminar(id)
          },
          reject: () => {
              //reject action
        }
    });
  }

  Eliminar(id : number){

    this.InventarioService.EliminarInventario(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-inventario', severity:'success', summary: `ELIMINACIÓN inventario` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-inventario', severity:'error', summary: `ELIMINACIÓN inventario` , detail: error.error.error});
    })
    
  }

  ObtenerInventarios(){
    this.InventarioService.obtenerInventario()
    .subscribe(
      (res) => {
        console.log("inventario",res)
        this.Inventarios = res;
        this.loading = false;
      }
      )
  }

}
