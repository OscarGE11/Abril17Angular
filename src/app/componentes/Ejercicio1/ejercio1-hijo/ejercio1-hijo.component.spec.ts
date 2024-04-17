import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercio1HijoComponent } from './ejercio1-hijo.component';

describe('Ejercio1HijoComponent', () => {
  let component: Ejercio1HijoComponent;
  let fixture: ComponentFixture<Ejercio1HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercio1HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercio1HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
