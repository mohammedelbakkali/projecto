import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOfDashboardComponent } from './header-of-dashboard.component';

describe('HeaderOfDashboardComponent', () => {
  let component: HeaderOfDashboardComponent;
  let fixture: ComponentFixture<HeaderOfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderOfDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
