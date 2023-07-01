import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaComponent } from './planta.component';

const routes: Routes = [
   { path: '', component : PlantaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantaRoutingModule { }
