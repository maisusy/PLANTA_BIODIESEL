import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmPlantaComponent } from './abm-planta.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylesModule } from 'src/app/styles.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AbmPlantaComponent,
  ],
  exports: [
    AbmPlantaComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    StylesModule,
  ]
})
export class AbmPlantaModule { }
