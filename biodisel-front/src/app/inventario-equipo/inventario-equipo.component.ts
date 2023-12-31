import { Component , OnInit , ViewChild , ElementRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InventarioEquipoService } from './inventario-equipo.service'; 
import { PrimeNGConfig } from 'primeng/api';
import * as FileSaver from 'file-saver';
import readXlsxFile from 'read-excel-file';
import { FileSelectEvent } from 'primeng/fileupload';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario-equipo.component.html',
  styleUrls: ['./inventario-equipo.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class InventarioEquipoComponent implements OnInit {

  public Inventarios : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 
  public accion: string = "";

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public InventarioEquipoService : InventarioEquipoService,
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
      'noFilter' : 'Sin filtros',
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

  ConfirmarTodo(event : Event ){
      this.confirmationService.confirm({
        target: event.target!,
        message: '¿Estas seguro?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.EliminarTodo()
        },
        reject: () => {
          //reject action
        }
    });
  }

  Eliminar(id : number){

    this.InventarioEquipoService.EliminarInventarioEquipo(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-inventario', severity:'success', summary: `ELIMINACIÓN inventario` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-inventario', severity:'error', summary: `ELIMINACIÓN inventario` , detail: error.error.error});
    })
    
  }

  EliminarTodo(){

    this.InventarioEquipoService.EliminarTodoInventarioEquipo()
    .subscribe( _ => {
      this.messageService.add({key: 'abm-inventario', severity:'success', summary: `ELIMINACIÓN TODO inventario` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-inventario', severity:'error', summary: `ELIMINACIÓN TODO inventario` , detail: error.error.error});
    })
    
  }

  ObtenerInventarios(){
    this.InventarioEquipoService.obtenerInventarioEquipo()
    .subscribe(
      (res) => {
        console.log("inventario",res)
        this.Inventarios = res;
        this.loading = false;
      }
      )
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.Inventarios);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'Inventario');
    });
 }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName +  + new Date().getTime() + EXCEL_EXTENSION);
  }

  async onExcelUpload(event: FileSelectEvent) {
    this.loading = true;
    const file = event.currentFiles[0]
    readXlsxFile(file).then((rows) => {

      rows.forEach(value => {
          let dato = {
              codigo : value[0],
              descripcion:value[1],
              caracteristicas: value[2]
            }

            if(dato.caracteristicas == null || dato.caracteristicas == ''){
              dato.caracteristicas = '-'
            }

            this.InventarioEquipoService.AgregarInventarioEquipo(dato)
            .subscribe(_ => {
            }, error => {
              console.log(error)
              this.messageService.add({ key: 'abm-inventario', severity: 'error', summary: `${this.accion} inventario `, detail: error.error.error });
            })

      })
    
      this.ObtenerInventarios()
      
    }) 
  }



}
