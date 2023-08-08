import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtagonisteComponent } from './protagoniste.component';

describe('ProtagonisteComponent', () => {
  let component: ProtagonisteComponent;
  let fixture: ComponentFixture<ProtagonisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProtagonisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtagonisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
