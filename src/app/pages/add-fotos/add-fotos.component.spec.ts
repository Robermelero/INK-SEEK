import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFotosComponent } from './add-fotos.component';

describe('AddFotosComponent', () => {
  let component: AddFotosComponent;
  let fixture: ComponentFixture<AddFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFotosComponent]
    });
    fixture = TestBed.createComponent(AddFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
