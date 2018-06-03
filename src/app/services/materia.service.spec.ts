import { TestBed, inject } from '@angular/core/testing';

import { MateriaService } from './materia.service';

describe('MateriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriaService]
    });
  });

  it('should be created', inject([MateriaService], (service: MateriaService) => {
    expect(service).toBeTruthy();
  }));
});
