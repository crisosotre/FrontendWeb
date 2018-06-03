import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLineaComponent } from './grafico-linea.component';

describe('GraficoLineaComponent', () => {
  let component: GraficoLineaComponent;
  let fixture: ComponentFixture<GraficoLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
