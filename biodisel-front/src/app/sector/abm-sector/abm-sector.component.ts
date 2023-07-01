import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-abm-sector',
  templateUrl: './abm-sector.component.html',
  styleUrls: ['./abm-sector.component.css']
})
export class AbmSectorComponent implements OnInit {


  @Input() visible: boolean = false;
  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  public accion: string = "";
  public invalid: string = "";

  formsSector = new FormGroup({
    'id': new FormControl(''),
    'codigo': new FormControl('', Validators.required),
    'nombre': new FormControl('', Validators.required)
  })

  constructor(
    private messageService: MessageService,
    public SectorService: SectorService,
  ) { }

  ngOnInit(): void {
  }

  hide() {
    this.formsSector.reset()
    this.invalid = ""
    this.success.emit()
  }

  show() {

    if (this.datos != null) {
      this.accion = "Actualizar"
      this.formsSector.setValue(this.datos)
    } else {
      this.accion = "Guardar"
    }
  }

  submit() {
    if (this.formsSector.valid) {
      if (this.datos == null) {
        delete this.formsSector.value.id
        this.SectorService.AgregarSector(this.formsSector.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-sector', severity: 'success', summary: `${this.accion} Sector`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-sector', severity: 'error', summary: `${this.accion} Sector`, detail: error.error.error });
        })
      } else {
        let id = Number(this.formsSector.value.id)
        this.SectorService.ActualizarSector(id,this.formsSector.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-sector', severity: 'success', summary: `${this.accion} Sector`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-sector', severity: 'error', summary: `${this.accion} Sector`, detail: error.error.error });
        })
      }
      this.hide()
    } else {
      this.invalid = "ng-dirty"
    }
  }

}
