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
import { InventarioFamiliaComponent } from '../inventario-familia/inventario-familia.component';
import { AbmInventarioModule } from '../inventario-familia/abm-inventario/abm-inventario.module';
import { InventarioFamiliaRoutingModule } from '../inventario-familia/inventario-familia-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    InventarioFamiliaComponent,
  ],
  imports: [
    InventarioFamiliaRoutingModule,
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
export class InventarioFamiliaModule { }
