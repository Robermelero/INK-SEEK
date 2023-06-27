import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddOpinionComponent } from './modal-add-opinion.component';

describe('ModalAddOpinionComponent', () => {
  let component: ModalAddOpinionComponent;
  let fixture: ComponentFixture<ModalAddOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddOpinionComponent]
    });
    fixture = TestBed.createComponent(ModalAddOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
