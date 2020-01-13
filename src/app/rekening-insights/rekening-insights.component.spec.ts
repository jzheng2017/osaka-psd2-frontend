import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RekeningInsightsComponent} from './rekening-insights.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RekeningInsightsComponent', () => {
  let component: RekeningInsightsComponent;
  let fixture: ComponentFixture<RekeningInsightsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxSpinnerModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [RekeningInsightsComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RekeningInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
