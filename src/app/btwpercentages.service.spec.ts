import {TestBed} from '@angular/core/testing';

import {BTWPercentagesService} from './btwpercentages.service';
import {HttpClientModule} from '@angular/common/http';

describe('BTWPercentagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: BTWPercentagesService = TestBed.get(BTWPercentagesService);
    expect(service).toBeTruthy();
  });
});
