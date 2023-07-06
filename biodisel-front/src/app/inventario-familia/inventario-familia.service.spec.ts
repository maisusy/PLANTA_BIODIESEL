/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InventarioFamiliaService } from './inventario-familia.service';

describe('Service: Inventario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventarioFamiliaService]
    });
  });

  it('should ...', inject([InventarioFamiliaService], (service: InventarioFamiliaService) => {
    expect(service).toBeTruthy();
  }));
});
