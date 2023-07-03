/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InventarioService } from './inventario.service';

describe('Service: Inventario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventarioService]
    });
  });

  it('should ...', inject([InventarioService], (service: InventarioService) => {
    expect(service).toBeTruthy();
  }));
});
