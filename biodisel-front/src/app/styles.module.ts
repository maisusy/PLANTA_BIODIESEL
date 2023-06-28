import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule} from 'primeng/inputtext';
import { CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';

import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es-AR';
registerLocaleData(locales);

@NgModule({
  exports: [
    //Comun
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CardModule,
    ToolbarModule
  ]
})

export class StylesModule { }
