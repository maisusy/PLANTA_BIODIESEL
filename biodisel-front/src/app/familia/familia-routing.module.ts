import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliaComponent } from './familia.component';

const routes: Routes = [
   { path: '', component : FamiliaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FamiliaRoutingModule { }
