/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectorService } from './sector.service';

describe('Service: Sector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectorService]
    });
  });

  it('should ...', inject([SectorService], (service: SectorService) => {
    expect(service).toBeTruthy();
  }));
});
