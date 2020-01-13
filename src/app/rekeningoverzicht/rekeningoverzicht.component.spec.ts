import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RekeningoverzichtComponent} from './rekeningoverzicht.component';
import {FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RekeningoverzichtComponent', () => {
  let component: RekeningoverzichtComponent;
  let fixture: ComponentFixture<RekeningoverzichtComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RekeningoverzichtComponent],
      imports: [
        FormsModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
      .compileComponents();
  }));


  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(RekeningoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
