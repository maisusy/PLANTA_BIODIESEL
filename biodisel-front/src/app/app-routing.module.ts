import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'familia', loadChildren: () => import('./familia/familia.module').then(m => m.FamiliaModule)},
   { path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)},
   { path: 'inventario', loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule)},
   { path:'',redirectTo:'familia',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
