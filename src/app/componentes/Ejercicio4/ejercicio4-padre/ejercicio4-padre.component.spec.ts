import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4PadreComponent } from './ejercicio4-padre.component';

describe('Ejercicio4PadreComponent', () => {
  let component: Ejercicio4PadreComponent;
  let fixture: ComponentFixture<Ejercicio4PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio4PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio4PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
