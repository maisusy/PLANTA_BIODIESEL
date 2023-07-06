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
import { InventarioEquipoComponent } from '../inventario-equipo/inventario-equipo.component';
import { AbmInventarioModule } from '../inventario-equipo/abm-inventario/abm-inventario.module';
import { InventarioEquipoRoutingModule } from '../inventario-equipo/inventario-equipo-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    InventarioEquipoComponent,
  ],
  imports: [
    InventarioEquipoRoutingModule,
    CommonModule,
    ToolbarModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    ConfirmPopupModule,
    FileUploadModule,
    ToastModule,
    PanelMenuModule,
    DividerModule,
    AbmInventarioModule,
    DynamicDialogModule
  ],
})                  
export class InventarioEquipoModule { }
