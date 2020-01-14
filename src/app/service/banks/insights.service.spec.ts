import {TestBed} from '@angular/core/testing';

import {InsightsService} from './insights.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('InsightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: InsightsService = TestBed.get(InsightsService);
    expect(service).toBeTruthy();
  });
});
