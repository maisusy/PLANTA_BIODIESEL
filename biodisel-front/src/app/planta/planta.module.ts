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
import { PlantaComponent } from './planta.component';
import { AbmPlantaModule } from './abm-planta/abm-planta.module';
import { PlantaRoutingModule } from './planta-routing.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    PlantaComponent,
  ],
  imports: [
    PlantaRoutingModule,
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
    AbmPlantaModule,
    DynamicDialogModule
  ],
})
export class PlantaModule { }
