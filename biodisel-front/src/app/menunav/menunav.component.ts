import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css']
})
export class MenunavComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inventario',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Inventario',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Familias',
                icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Sectores',
                icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Planta',
                icon: 'pi pi-fw pi-calendar',
            }, 
            {
              label: 'Equipos',
              icon: 'pi pi-fw pi-calendar',
          },
        ];
        this.activeItem = this.items[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }


}
