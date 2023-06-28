import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FamiliaService } from './familia.service'

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class FamiliaComponent implements OnInit {

  public Familias : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 


  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public FamiliaService : FamiliaService
  ) { }

  ngOnInit(): void {
    this.ObtenerFamilias()
  }

  success(){
    
    this.modal = '';
  }

  MODAL(tipo : string , modal : any = null ){
    this.modal = tipo;
    this.modalDatos = modal;
  }

  Confirmar(event : Event, id : number ){
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

    this.FamiliaService.EliminarFamilia(id).subscribe( _ => {
      this.messageService.add({key: 'abm-familia', severity:'success', summary: `ELIMINACIÓN FAMILIA` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-familia', severity:'error', summary: `ELIMINACIÓN FAMILIA` , detail: error.error.error});
    })
    
  }

  ObtenerFamilias(){
    this.FamiliaService.obtenerFamilia()
    .subscribe(
      (res) => {
        console.log("Famiias",res)
        this.Familias = res;
        this.loading = false;
      }
      )
  }

}
