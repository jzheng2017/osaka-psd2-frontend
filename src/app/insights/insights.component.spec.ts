import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InsightsComponent} from './insights.component';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InsightsComponent', () => {
  let component: InsightsComponent;
  let fixture: ComponentFixture<InsightsComponent>;
  let httpMock: HttpClientTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgxSpinnerModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        HttpClient,
        HttpClientModule,
      ],
      declarations: [InsightsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpClientTestingModule);
    fixture = TestBed.createComponent(InsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
