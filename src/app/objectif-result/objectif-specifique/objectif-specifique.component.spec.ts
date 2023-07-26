import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifSpecifiqueComponent } from './objectif-specifique.component';

describe('ObjectifSpecifiqueComponent', () => {
  let component: ObjectifSpecifiqueComponent;
  let fixture: ComponentFixture<ObjectifSpecifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObjectifSpecifiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectifSpecifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
