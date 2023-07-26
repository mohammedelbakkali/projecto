import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifResultComponent } from './objectif-result.component';

describe('ObjectifResultComponent', () => {
  let component: ObjectifResultComponent;
  let fixture: ComponentFixture<ObjectifResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObjectifResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectifResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
