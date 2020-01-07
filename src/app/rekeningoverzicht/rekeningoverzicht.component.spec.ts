import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningoverzichtComponent } from './rekeningoverzicht.component';
import {FormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RekeningoverzichtComponent', () => {
  let component: RekeningoverzichtComponent;
  let fixture: ComponentFixture<RekeningoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningoverzichtComponent ],
      imports: [
        FormsModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
