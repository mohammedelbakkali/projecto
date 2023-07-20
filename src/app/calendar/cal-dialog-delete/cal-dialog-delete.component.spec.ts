import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDialogDeleteComponent } from './cal-dialog-delete.component';

describe('CalDialogDeleteComponent', () => {
  let component: CalDialogDeleteComponent;
  let fixture: ComponentFixture<CalDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalDialogDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
