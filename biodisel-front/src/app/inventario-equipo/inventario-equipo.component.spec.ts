import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEquipoComponent } from './inventario-equipo.component';

describe('InventarioEquipoComponent', () => {
  let component: InventarioEquipoComponent;
  let fixture: ComponentFixture<InventarioEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioEquipoComponent]
    });
    fixture = TestBed.createComponent(InventarioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
