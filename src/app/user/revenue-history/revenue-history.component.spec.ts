import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueHistoryComponent } from './revenue-history.component';

describe('RevenueHistoryComponent', () => {
  let component: RevenueHistoryComponent;
  let fixture: ComponentFixture<RevenueHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
