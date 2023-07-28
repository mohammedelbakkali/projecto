import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypotheseComponent } from './hypothese.component';

describe('HypotheseComponent', () => {
  let component: HypotheseComponent;
  let fixture: ComponentFixture<HypotheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HypotheseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypotheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
