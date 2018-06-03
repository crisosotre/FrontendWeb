import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionestutoriaComponent } from './observacionestutoria.component';

describe('ObservacionestutoriaComponent', () => {
  let component: ObservacionestutoriaComponent;
  let fixture: ComponentFixture<ObservacionestutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionestutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionestutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
