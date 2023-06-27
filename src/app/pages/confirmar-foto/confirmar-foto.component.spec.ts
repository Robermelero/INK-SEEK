import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarFotoComponent } from './confirmar-foto.component';

describe('ConfirmarFotoComponent', () => {
  let component: ConfirmarFotoComponent;
  let fixture: ComponentFixture<ConfirmarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarFotoComponent]
    });
    fixture = TestBed.createComponent(ConfirmarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
