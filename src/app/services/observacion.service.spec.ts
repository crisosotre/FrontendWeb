import { TestBed, inject } from '@angular/core/testing';

import { ObservacionService } from './observacion.service';

describe('ObservacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservacionService]
    });
  });

  it('should be created', inject([ObservacionService], (service: ObservacionService) => {
    expect(service).toBeTruthy();
  }));
});
