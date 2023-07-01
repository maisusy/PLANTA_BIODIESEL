import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmSectorComponent } from './abm-sector.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylesModule } from 'src/app/styles.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AbmSectorComponent,
  ],
  exports: [
    AbmSectorComponent,
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
export class AbmSectorModule { }
