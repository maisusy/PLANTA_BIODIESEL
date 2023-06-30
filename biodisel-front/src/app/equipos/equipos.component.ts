import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquiposService } from './equipos.service'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class EquiposComponent implements OnInit {

  public Equipos : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public EquiposService : EquiposService,
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
    this.ObtenerEquiposs()
  
  }

  success(){
    
    this.modal = '';
    this.ObtenerEquiposs()
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

    this.EquiposService.EliminarEquipos(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-Equipos', severity:'success', summary: `ELIMINACIÓN Equipos` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-Equipos', severity:'error', summary: `ELIMINACIÓN Equipos` , detail: error.error.error});
    })
    
  }

  ObtenerEquiposs(){
    this.EquiposService.obtenerEquipos()
    .subscribe(
      (res) => {
        console.log("Famiias",res)
        this.Equipos = res;
        this.loading = false;
      }
      )
  }

}
