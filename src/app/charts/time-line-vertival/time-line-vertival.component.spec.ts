import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineVertivalComponent } from './time-line-vertival.component';

describe('TimeLineVertivalComponent', () => {
  let component: TimeLineVertivalComponent;
  let fixture: ComponentFixture<TimeLineVertivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TimeLineVertivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineVertivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
