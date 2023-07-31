import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciereComponent } from './financiere.component';

describe('FinanciereComponent', () => {
  let component: FinanciereComponent;
  let fixture: ComponentFixture<FinanciereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FinanciereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanciereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
