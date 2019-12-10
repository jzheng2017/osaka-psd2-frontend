import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InstellingenComponent} from './instellingen.component';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {User} from '../user';

describe('InstellingenComponent', () => {
  let component: InstellingenComponent;
  let fixture: ComponentFixture<InstellingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstellingenComponent,
        NgxSpinnerComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstellingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
