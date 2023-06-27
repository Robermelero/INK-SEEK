import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileUserComponent } from './edit-profile-user.component';

describe('EditProfileUserComponent', () => {
  let component: EditProfileUserComponent;
  let fixture: ComponentFixture<EditProfileUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfileUserComponent]
    });
    fixture = TestBed.createComponent(EditProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
