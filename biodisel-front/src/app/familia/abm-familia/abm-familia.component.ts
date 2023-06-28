import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FamiliaService } from '../familia.service';

@Component({
  selector: 'app-abm-familia',
  templateUrl: './abm-familia.component.html',
  styleUrls: ['./abm-familia.component.css']
})
export class AbmFamiliaComponent implements OnInit {


  @Input() visible: boolean = false;
  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  public accion: string = "";
  public invalid: string = "";

  formsFamilia = new FormGroup({
    'id': new FormControl(''),
    'codigo': new FormControl('', Validators.required),
    'descripcion': new FormControl('', Validators.required)
  })

  constructor(
    private messageService: MessageService,
    public FamiliaService: FamiliaService,
  ) { }

  ngOnInit(): void {
  }

  hide() {
    this.formsFamilia.reset()
    this.invalid = ""
    this.success.emit()
  }

  show() {

    if (this.datos != null) {
      this.accion = "Actualizar"
      this.formsFamilia.setValue(this.datos)
    } else {
      this.accion = "Guardar"
    }
  }

  submit() {
    if (this.formsFamilia.valid) {
      if (this.datos == null) {
        delete this.formsFamilia.value.id
        this.FamiliaService.AgregarFamilia(this.formsFamilia.value).subscribe(_ => {
          this.messageService.add({ key: 'abm-familia', severity: 'success', summary: `${this.accion} familia`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-familia', severity: 'error', summary: `${this.accion} familia`, detail: error.error.error });
        })
      } else {
        let id = Number(this.formsFamilia.value.id)
        this.FamiliaService.ActualizarFamilia(id,this.formsFamilia.value).subscribe(_ => {
          this.messageService.add({ key: 'abm-familia', severity: 'success', summary: `${this.accion} familia`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-familia', severity: 'error', summary: `${this.accion} familia`, detail: error.error.error });
        })
      }
      this.hide()
    } else {
      this.invalid = "ng-dirty"
    }
  }

}
