import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactieoverzichtComponent} from './transactieoverzicht.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('TransactieoverzichtComponent', () => {
  let component: TransactieoverzichtComponent;
  let fixture: ComponentFixture<TransactieoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactieoverzichtComponent],
      imports: [
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactieoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
