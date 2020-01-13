import {TestBed} from '@angular/core/testing';

import {RekeningcategoryService} from './rekeningcategory.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('RekeningcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: RekeningcategoryService = TestBed.get(RekeningcategoryService);
    expect(service).toBeTruthy();
  });
});
