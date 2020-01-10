import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InstellingenComponent} from './instellingen.component';
import {NgxSpinner} from 'ngx-spinner/lib/ngx-spinner.enum';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InstellingenComponent', () => {
  let component: InstellingenComponent;
  let fixture: ComponentFixture<InstellingenComponent>;
  let httpMock: HttpClientTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstellingenComponent],
      imports: [
        NgxSpinnerModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpClientTestingModule);
    fixture = TestBed.createComponent(InstellingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
