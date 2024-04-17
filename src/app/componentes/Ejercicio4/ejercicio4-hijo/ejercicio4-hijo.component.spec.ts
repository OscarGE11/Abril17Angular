import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4HijoComponent } from './ejercicio4-hijo.component';

describe('Ejercicio4HijoComponent', () => {
  let component: Ejercicio4HijoComponent;
  let fixture: ComponentFixture<Ejercicio4HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio4HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio4HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
