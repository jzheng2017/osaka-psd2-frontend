import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningInsightsComponent } from './rekening-insights.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RekeningInsightsComponent', () => {
  let component: RekeningInsightsComponent;
  let fixture: ComponentFixture<RekeningInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxSpinnerModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
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
