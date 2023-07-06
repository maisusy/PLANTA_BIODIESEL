import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InventarioEquipoService } from '../inventario-equipo.service';

@Component({
  selector: 'app-abm-inventario',
  templateUrl: './abm-inventario.component.html',
  styleUrls: ['./abm-inventario.component.css']
})
export class AbmInventarioComponent implements OnInit {


  @Input() visible: boolean = false;
  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  public accion: string = "";
  public invalid: string = "";

  formsInventario = new FormGroup({
    'id': new FormControl(''),
    'codigo': new FormControl('', Validators.required),
    'descripcion': new FormControl('', Validators.required),
    'caracteristicas': new FormControl('', Validators.required)
  })

  constructor(
    private messageService: MessageService,
    public InventarioEquipoService: InventarioEquipoService,
  ) { }

  ngOnInit(): void {
  }

  hide() {
    this.formsInventario.reset()
    this.invalid = ""
    this.success.emit()
  }

  show() {

    if (this.datos != null) {
      this.accion = "Actualizar"
      this.formsInventario.setValue(this.datos)
    } else {
      this.accion = "Guardar"
    }
  }

  submit() {
    if (this.formsInventario.valid) {
      if (this.datos == null) {
        delete this.formsInventario.value.id
        this.InventarioEquipoService.AgregarInventario(this.formsInventario.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-inventario', severity: 'success', summary: `${this.accion} inventario`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-inventario', severity: 'error', summary: `${this.accion} inventario`, detail: error.error.error });
        })
      } else {
        let id = Number(this.formsInventario.value.id)
        this.InventarioEquipoService.ActualizarInventario(id,this.formsInventario.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-inventario', severity: 'success', summary: `${this.accion} inventario`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-inventario', severity: 'error', summary: `${this.accion} inventario`, detail: error.error.error });
        })
      }
      this.hide()
    } else {
      this.invalid = "ng-dirty"
    }
  }

}
