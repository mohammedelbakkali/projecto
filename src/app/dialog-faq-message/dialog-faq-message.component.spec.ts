import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFaqMessageComponent } from './dialog-faq-message.component';

describe('DialogFaqMessageComponent', () => {
  let component: DialogFaqMessageComponent;
  let fixture: ComponentFixture<DialogFaqMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DialogFaqMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFaqMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
