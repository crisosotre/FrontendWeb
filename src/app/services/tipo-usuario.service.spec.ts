import { TestBed, inject } from '@angular/core/testing';

import { TipoUsuarioService } from './tipo-usuario.service';

describe('TipoUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoUsuarioService]
    });
  });

  it('should be created', inject([TipoUsuarioService], (service: TipoUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
