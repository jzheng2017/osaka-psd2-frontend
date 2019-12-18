import { TestBed } from '@angular/core/testing';

import { InsightsService } from './insights.service';

describe('InsightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsightsService = TestBed.get(InsightsService);
    expect(service).toBeTruthy();
  });
});
