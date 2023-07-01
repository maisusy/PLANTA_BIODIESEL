import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-abm-planta',
  templateUrl: './abm-planta.component.html',
  styleUrls: ['./abm-planta.component.css']
})
export class AbmPlantaComponent implements OnInit {


  @Input() visible: boolean = false;
  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  public accion: string = "";
  public invalid: string = "";

  formsPlanta = new FormGroup({
    'id': new FormControl(''),
    'codigo': new FormControl('', Validators.required),
    'tipo': new FormControl('', Validators.required)
  })

  constructor(
    private messageService: MessageService,
    public PlantaService: PlantaService,
  ) { }

  ngOnInit(): void {
  }

  hide() {
    this.formsPlanta.reset()
    this.invalid = ""
    this.success.emit()
  }

  show() {

    if (this.datos != null) {
      this.accion = "Actualizar"
      this.formsPlanta.setValue(this.datos)
    } else {
      this.accion = "Guardar"
    }
  }

  submit() {
    if (this.formsPlanta.valid) {
      if (this.datos == null) {
        delete this.formsPlanta.value.id
        this.PlantaService.AgregarPlanta(this.formsPlanta.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-planta', severity: 'success', summary: `${this.accion} Planta`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-planta', severity: 'error', summary: `${this.accion} Planta`, detail: error.error.error });
        })
      } else {
        let id = Number(this.formsPlanta.value.id)
        this.PlantaService.ActualizarPlanta(id,this.formsPlanta.value)
        .subscribe(_ => {
          this.messageService.add({ key: 'abm-planta', severity: 'success', summary: `${this.accion} Planta`, detail: 'La acción se realizo correctamente' });
        }, error => {
          console.log(error)
          this.messageService.add({ key: 'abm-planta', severity: 'error', summary: `${this.accion} Planta`, detail: error.error.error });
        })
      }
      this.hide()
    } else {
      this.invalid = "ng-dirty"
    }
  }

}
