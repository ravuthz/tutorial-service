import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeachingPlanComponent } from './page-teaching-plan.component';

describe('PageTeachingPlanComponent', () => {
  let component: PageTeachingPlanComponent;
  let fixture: ComponentFixture<PageTeachingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTeachingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTeachingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
