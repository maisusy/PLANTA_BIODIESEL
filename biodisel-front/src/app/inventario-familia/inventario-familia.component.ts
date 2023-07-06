import { Component , OnInit , ViewChild , ElementRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InventarioFamiliaService } from './inventario-familia.service'
import { PrimeNGConfig } from 'primeng/api';
import * as FileSaver from 'file-saver';
import readXlsxFile from 'read-excel-file';
import { FileSelectEvent } from 'primeng/fileupload';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario-familia.component.html',
  styleUrls: ['./inventario-familia.component.css'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class InventarioFamiliaComponent implements OnInit {

  public Inventarios : any;
  public modalDatos : any;
  public modal : string = "";
  public loading: boolean = true; 

  constructor(
    public confirmationService : ConfirmationService,
    public messageService : MessageService,
    public InventarioService : InventarioFamiliaService,
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

    this.InventarioService.EliminarInventario(id)
    .subscribe( _ => {
      this.messageService.add({key: 'abm-inventario', severity:'success', summary: `ELIMINACIÓN inventario` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-inventario', severity:'error', summary: `ELIMINACIÓN inventario` , detail: error.error.error});
    })
    
  }

  EliminarTodo(){

    this.InventarioService.EliminarTodoInventario()
    .subscribe( _ => {
      this.messageService.add({key: 'abm-inventario', severity:'success', summary: `ELIMINACIÓN TODO inventario` , detail:'La acción se realizo correctamente'});
      this.success()
    }, error => {
      console.log(error)
      this.messageService.add({key: 'abm-inventario', severity:'error', summary: `ELIMINACIÓN TODO inventario` , detail: error.error.error});
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
    const file = event.currentFiles[0]
    readXlsxFile(file).then((rows) => {
      console.log(rows)
    })
  }
}
