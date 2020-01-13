import {TestBed} from '@angular/core/testing';

import {RekeningService} from './rekening.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RekeningService', () => {
  let httpMock: HttpClientTestingModule;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
  );
  beforeEach(() => {
    httpMock = TestBed.get(HttpClientTestingModule);
  });

  it('should be created', () => {
    const service: RekeningService = TestBed.get(RekeningService);
    expect(service).toBeTruthy();
  });
});
