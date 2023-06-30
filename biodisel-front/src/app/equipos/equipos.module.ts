import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { EquiposComponent } from './equipos.component';
import { AbmEquiposModule } from './abm-equipos/abm-equipos.module';
import { EquiposRoutingModule } from './equipos-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    EquiposComponent,
  ],
  imports: [
    EquiposRoutingModule,
    CommonModule,
    ToolbarModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    ConfirmPopupModule,
    ToastModule,
    PanelMenuModule,
    DividerModule,
    AbmEquiposModule,
    DynamicDialogModule
  ],
})
export class EquiposModule { }
