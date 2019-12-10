import {TestBed} from '@angular/core/testing';

import {RekeningcategoryService} from './rekeningcategory.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('RekeningcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    }
  ));

  it('should be created', () => {
    const service: RekeningcategoryService = TestBed.get(RekeningcategoryService);
    expect(service).toBeTruthy();
  });
});
