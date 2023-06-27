/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EquiposService } from './equipos.service';

describe('Service: Equipos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquiposService]
    });
  });

  it('should ...', inject([EquiposService], (service: EquiposService) => {
    expect(service).toBeTruthy();
  }));
});
