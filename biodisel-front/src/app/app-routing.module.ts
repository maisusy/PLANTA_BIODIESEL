import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'familia', loadChildren: () => import('./familia/familia.module').then(m => m.FamiliaModule)},
   { path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)},
   { path: 'sector', loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule)},
   { path: 'planta', loadChildren: () => import('./planta/planta.module').then(m => m.PlantaModule)},
   { path: 'inventario', loadChildren: () => import('./inventario-familia/inventario.module').then(m => m.InventarioModule)},
   { path:'',redirectTo:'inventario',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
