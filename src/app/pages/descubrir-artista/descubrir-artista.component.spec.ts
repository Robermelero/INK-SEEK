import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubrirArtistaComponent } from './descubrir-artista.component';

describe('DescubrirArtistaComponent', () => {
  let component: DescubrirArtistaComponent;
  let fixture: ComponentFixture<DescubrirArtistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescubrirArtistaComponent]
    });
    fixture = TestBed.createComponent(DescubrirArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
