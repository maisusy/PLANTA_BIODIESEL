import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmInventarioComponent } from './abm-inventario.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylesModule } from 'src/app/styles.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AbmInventarioComponent,
  ],
  exports: [
    AbmInventarioComponent,
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
export class AbmInventarioModule { }
