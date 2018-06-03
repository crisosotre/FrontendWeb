import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientotutoriaComponent } from './seguimientotutoria.component';

describe('SeguimientotutoriaComponent', () => {
  let component: SeguimientotutoriaComponent;
  let fixture: ComponentFixture<SeguimientotutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientotutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientotutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
