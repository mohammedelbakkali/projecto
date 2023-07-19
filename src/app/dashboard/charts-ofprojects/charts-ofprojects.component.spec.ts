import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsOfprojectsComponent } from './charts-ofprojects.component';

describe('ChartsOfprojectsComponent', () => {
  let component: ChartsOfprojectsComponent;
  let fixture: ComponentFixture<ChartsOfprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChartsOfprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsOfprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
