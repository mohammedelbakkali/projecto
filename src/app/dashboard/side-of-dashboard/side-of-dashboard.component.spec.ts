import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOfDashboardComponent } from './side-of-dashboard.component';

describe('SideOfDashboardComponent', () => {
  let component: SideOfDashboardComponent;
  let fixture: ComponentFixture<SideOfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SideOfDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideOfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
