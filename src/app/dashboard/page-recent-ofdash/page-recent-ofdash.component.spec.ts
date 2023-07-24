import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecentOfdashComponent } from './page-recent-ofdash.component';

describe('PageRecentOfdashComponent', () => {
  let component: PageRecentOfdashComponent;
  let fixture: ComponentFixture<PageRecentOfdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageRecentOfdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRecentOfdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
