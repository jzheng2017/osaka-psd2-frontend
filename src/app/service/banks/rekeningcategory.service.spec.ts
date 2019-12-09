import { TestBed } from '@angular/core/testing';

import { RekeningcategoryService } from './rekeningcategory.service';

describe('RekeningcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RekeningcategoryService = TestBed.get(RekeningcategoryService);
    expect(service).toBeTruthy();
  });
});
