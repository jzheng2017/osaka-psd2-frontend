import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RekeningComponent} from './rekening.component';
import {TransactieoverzichtComponent} from "../transactieoverzicht/transactieoverzicht.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RekeningComponent', () => {
  let component: RekeningComponent;
  let fixture: ComponentFixture<RekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RekeningComponent,
        TransactieoverzichtComponent
      ],
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
    fixture = TestBed.createComponent(RekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
