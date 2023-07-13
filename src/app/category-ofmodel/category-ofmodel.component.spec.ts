import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOfmodelComponent } from './category-ofmodel.component';

describe('CategoryOfmodelComponent', () => {
  let component: CategoryOfmodelComponent;
  let fixture: ComponentFixture<CategoryOfmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CategoryOfmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryOfmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
