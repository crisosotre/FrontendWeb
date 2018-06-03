import { TestBed, inject } from '@angular/core/testing';

import { AsistenciaService } from './asistencia.service';

describe('AsistenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistenciaService]
    });
  });

  it('should be created', inject([AsistenciaService], (service: AsistenciaService) => {
    expect(service).toBeTruthy();
  }));
});
