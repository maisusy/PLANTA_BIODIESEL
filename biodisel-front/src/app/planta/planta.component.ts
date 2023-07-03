import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PlantaService } from './planta.service'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PlantaComponent implements OnInit {

  public Planta : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public PlantaService : PlantaService,
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
    this.ObtenerPlantas()
  
  }

  success(){
    
    this.modal = '';
    this.ObtenerPlantas()
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

    this.PlantaService.EliminarPlanta(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-planta', severity:'success', summary: `ELIMINACIÓN Planta` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-planta', severity:'error', summary: `ELIMINACIÓN Planta` , detail: error.error.error});
    })
    
  }

  ObtenerPlantas(){
    this.PlantaService.obtenerPlanta()
    .subscribe(
      (res) => {
        console.log("planta",res)
        this.Planta = res;
        this.loading = false;
      }
      )
  }

}
