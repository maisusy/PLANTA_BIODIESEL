import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenunavComponent } from './menunav.component';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [
    MenunavComponent,
  ],
  exports: [
    MenunavComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    TabMenuModule
  ],
})
export class MenunavModule { }
