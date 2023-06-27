import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamiliaComponent } from './familia/familia.component';
import { SectorComponent } from './sector/sector.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FamiliaComponent } from './familia/familia.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PlantaComponent } from './planta/planta.component';

@NgModule({
  declarations: [						
    AppComponent,
      FamiliaComponent,
      SectorComponent,
      EquiposComponent,
      FamiliaComponent,
      InventarioComponent,
      PlantaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
