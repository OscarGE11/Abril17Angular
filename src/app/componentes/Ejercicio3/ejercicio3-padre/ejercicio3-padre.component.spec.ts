import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3PadreComponent } from './ejercicio3-padre.component';

describe('Ejercicio3PadreComponent', () => {
  let component: Ejercicio3PadreComponent;
  let fixture: ComponentFixture<Ejercicio3PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio3PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio3PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
