import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationResetPasswordComponent } from './confirmation-reset-password.component';

describe('ConfirmationResetPasswordComponent', () => {
  let component: ConfirmationResetPasswordComponent;
  let fixture: ComponentFixture<ConfirmationResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfirmationResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
