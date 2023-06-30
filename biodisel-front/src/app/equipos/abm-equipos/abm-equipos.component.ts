import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-abm-equipos',
  templateUrl: './abm-equipos.component.html',
  styleUrls: ['./abm-equipos.component.css']
})
export class AbmEquiposComponent implements OnInit {


  @Input() visible: boolean = false;
  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  public accion: string = "";
  public invalid: string = "";

  formsEquipos = new FormGroup({
    'id': new FormControl(''),
    'codigo': new FormControl('', Validators.required),
    'tipo': new FormControl('', Validators.required)
  })

  constructor(
    private messageService: MessageService,
    public EquiposService: EquiposService,
  ) { }

  ngOnInit(): void {
  }

  hide() {
    this.formsEquipos.reset()
    this.invalid = ""
    this.success.emit()
  }

  show() {

    if (this.datos != null) {
      this.accion = "Actualizar"
      this.formsEquipos.setValue(this.datos)
    } else {
      this.accion = "Guardar"
    }
  }

  submit() {
    if (this.formsEquipos.valid) {
      if (this.datos == null) {
        delete this.formsEquipos.value.id
        this.EquiposService.AgregarEquipos(this.formsEquipos.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-Equipos', severity: 'success', summary: `${this.accion} Equipos`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-Equipos', severity: 'error', summary: `${this.accion} Equipos`, detail: error.error.error });
        })
      } else {
        let id = Number(this.formsEquipos.value.id)
        this.EquiposService.ActualizarEquipos(id,this.formsEquipos.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-Equipos', severity: 'success', summary: `${this.accion} Equipos`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-Equipos', severity: 'error', summary: `${this.accion} Equipos`, detail: error.error.error });
        })
      }
      this.hide()
    } else {
      this.invalid = "ng-dirty"
    }
  }

}
