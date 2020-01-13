import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RekeningSettingsComponent} from './rekening-settings.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RekeningSettingsComponent', () => {
  let component: RekeningSettingsComponent;
  let fixture: ComponentFixture<RekeningSettingsComponent>;
  let httpMock: HttpClientTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RekeningSettingsComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpClientTestingModule);
    fixture = TestBed.createComponent(RekeningSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
