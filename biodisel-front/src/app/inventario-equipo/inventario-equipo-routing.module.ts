import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioEquipoComponent } from './inventario-equipo.component';

const routes: Routes = [
   { path: '', component : InventarioEquipoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioEquipoRoutingModule { }
