/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FamiliaService } from './familia.service';

describe('Service: Familia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamiliaService]
    });
  });

  it('should ...', inject([FamiliaService], (service: FamiliaService) => {
    expect(service).toBeTruthy();
  }));
});
