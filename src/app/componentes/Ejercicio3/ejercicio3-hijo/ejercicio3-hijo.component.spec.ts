import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3HijoComponent } from './ejercicio3-hijo.component';

describe('Ejercicio3HijoComponent', () => {
  let component: Ejercicio3HijoComponent;
  let fixture: ComponentFixture<Ejercicio3HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio3HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio3HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
