import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjectCardComponent } from './mini-project-card.component';

describe('MiniProjectCardComponent', () => {
  let component: MiniProjectCardComponent;
  let fixture: ComponentFixture<MiniProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MiniProjectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
