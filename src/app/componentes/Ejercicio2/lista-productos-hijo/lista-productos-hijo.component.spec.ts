import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosHijoComponent } from './lista-productos-hijo.component';

describe('ListaProductosHijoComponent', () => {
  let component: ListaProductosHijoComponent;
  let fixture: ComponentFixture<ListaProductosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
