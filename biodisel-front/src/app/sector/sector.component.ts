import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SectorService } from './sector.service'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class SectorComponent implements OnInit {

  public Sector : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public SectorService : SectorService,
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
    this.ObtenerSectors()
  
  }

  success(){
    
    this.modal = '';
    this.ObtenerSectors()
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

    this.SectorService.EliminarSector(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-sector', severity:'success', summary: `ELIMINACIÓN Sector` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-sector', severity:'error', summary: `ELIMINACIÓN Sector` , detail: error.error.error});
    })
    
  }

  ObtenerSectors(){
    this.SectorService.obtenerSector()
    .subscribe(
      (res) => {
        console.log("Sector",res)
        this.Sector = res;
        this.loading = false;
      }
      )
  }

}
