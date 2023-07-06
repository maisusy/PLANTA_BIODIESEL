import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'familia', loadChildren: () => import('./familia/familia.module').then(m => m.FamiliaModule)},
   { path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)},
   { path: 'sector', loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule)},
   { path: 'planta', loadChildren: () => import('./planta/planta.module').then(m => m.PlantaModule)},
   { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)},
   { path: 'inventario-familia', loadChildren: () => import('./inventario-familia/inventario-familia.module').then(m => m.InventarioFamiliaModule)},
   { path: 'inventario-equipo', loadChildren: () => import('./inventario-equipo/inventario-equipo.module').then(m => m.InventarioEquipoModule)},
   { path:'',redirectTo:'inicio',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
