/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantaService]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
