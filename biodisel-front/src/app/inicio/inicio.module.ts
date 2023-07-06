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
import { InicioComponent } from '../inicio/inicio.component';
import { InicioRoutingModule } from '../inicio/inicio-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    InicioRoutingModule,
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
    DynamicDialogModule
  ],
})                  
export class InicioModule { }
