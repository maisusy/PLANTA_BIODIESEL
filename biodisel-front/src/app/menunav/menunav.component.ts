import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment as env } from '../../environments/environments';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css']
})
export class MenunavComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  public env = env;


  constructor(private router: Router,
     private route: ActivatedRoute){}


    ngOnInit() {
        this.items = [
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
 
        switch(event.label){
        case 'Equipos' : 
            this.router.navigate(['equipos']);
        break;
        case 'Inventario' : 
            this.router.navigate(['inventario']);
        break;
        case 'Familias' : 
            this.router.navigate(['familia']);
        break;
        case 'Sectores' : 
            this.router.navigate(['sector']);
        break;
        case 'Planta' : 
            this.router.navigate(['planta']);
        break;
    }

        console.log('aaaa', event.label )
     }


}
