import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioFamiliaComponent } from './inventario-familia.component';

const routes: Routes = [
   { path: '', component : InventarioFamiliaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioFamiliaRoutingModule { }
