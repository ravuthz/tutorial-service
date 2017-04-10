import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSchedulesComponent } from './page-schedules.component';

describe('PageSchedulesComponent', () => {
  let component: PageSchedulesComponent;
  let fixture: ComponentFixture<PageSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
