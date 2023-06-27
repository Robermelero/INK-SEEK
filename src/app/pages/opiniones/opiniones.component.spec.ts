import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesComponent } from './opiniones.component';

describe('OpinionesComponent', () => {
  let component: OpinionesComponent;
  let fixture: ComponentFixture<OpinionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionesComponent]
    });
    fixture = TestBed.createComponent(OpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
