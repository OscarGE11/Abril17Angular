import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1PadreComponent } from './ejercicio1-padre.component';

describe('Ejercicio1PadreComponent', () => {
  let component: Ejercicio1PadreComponent;
  let fixture: ComponentFixture<Ejercicio1PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio1PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
