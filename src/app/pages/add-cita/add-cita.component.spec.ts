import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitaComponent } from './add-cita.component';

describe('AddCitaComponent', () => {
  let component: AddCitaComponent;
  let fixture: ComponentFixture<AddCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCitaComponent]
    });
    fixture = TestBed.createComponent(AddCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
