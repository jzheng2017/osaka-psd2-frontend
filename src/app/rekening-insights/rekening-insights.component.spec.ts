import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningInsightsComponent } from './rekening-insights.component';

describe('RekeningInsightsComponent', () => {
  let component: RekeningInsightsComponent;
  let fixture: ComponentFixture<RekeningInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
