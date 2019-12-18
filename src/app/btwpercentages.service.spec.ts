import { TestBed } from '@angular/core/testing';

import { BTWPercentagesService } from './btwpercentages.service';

describe('BTWPercentagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BTWPercentagesService = TestBed.get(BTWPercentagesService);
    expect(service).toBeTruthy();
  });
});
