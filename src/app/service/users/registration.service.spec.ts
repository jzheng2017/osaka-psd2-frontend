import {TestBed} from '@angular/core/testing';

import {RegistrationService} from './registration.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('RegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler,
    ]
  }));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
