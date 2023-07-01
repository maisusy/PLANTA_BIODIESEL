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
import { InventarioComponent } from './inventario.component';
import { AbmInventarioModule } from './abm-inventario/abm-inventario.module';
import { InventarioRoutingModule } from './inventario-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    InventarioComponent,
  ],
  imports: [
    InventarioRoutingModule,
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
    AbmInventarioModule,
    DynamicDialogModule
  ],
})
export class InventarioModule { }
