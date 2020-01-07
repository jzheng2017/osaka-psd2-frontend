import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RekeningSettingsComponent} from './rekening-settings.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RekeningSettingsComponent', () => {
  let component: RekeningSettingsComponent;
  let fixture: ComponentFixture<RekeningSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RekeningSettingsComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
