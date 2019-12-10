import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RegistrationComponent} from './registration.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Router} from '@angular/router';
import {TransactieoverzichtComponent} from '../transactieoverzicht/transactieoverzicht.component';
import {RegistrationService} from '../service/users/registration.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        RegistrationService,
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
