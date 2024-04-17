import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPadreComponent } from './lista-productos-padre.component';

describe('ListaProductosPadreComponent', () => {
  let component: ListaProductosPadreComponent;
  let fixture: ComponentFixture<ListaProductosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductosPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaProductosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
