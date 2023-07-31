import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGeneralComponent } from './information-general.component';

describe('InformationGeneralComponent', () => {
  let component: InformationGeneralComponent;
  let fixture: ComponentFixture<InformationGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InformationGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
