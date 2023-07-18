import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoCompteComponent } from './dialog-info-compte.component';

describe('DialogInfoCompteComponent', () => {
  let component: DialogInfoCompteComponent;
  let fixture: ComponentFixture<DialogInfoCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DialogInfoCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInfoCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
