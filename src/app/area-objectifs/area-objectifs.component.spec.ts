import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaObjectifsComponent } from './area-objectifs.component';

describe('AreaObjectifsComponent', () => {
  let component: AreaObjectifsComponent;
  let fixture: ComponentFixture<AreaObjectifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AreaObjectifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
