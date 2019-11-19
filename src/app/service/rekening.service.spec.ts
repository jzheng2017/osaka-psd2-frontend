import { TestBed } from '@angular/core/testing';

import { RekeningService } from './rekening.service';

describe('RekeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RekeningService = TestBed.get(RekeningService);
    expect(service).toBeTruthy();
  });
});
