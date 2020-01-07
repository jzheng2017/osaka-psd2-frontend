import { TestBed } from '@angular/core/testing';

import { RekeningService } from './rekening.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RekeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({    imports: [
      RouterTestingModule,
      HttpClientModule
    ]}));

  it('should be created', () => {
    const service: RekeningService = TestBed.get(RekeningService);
    expect(service).toBeTruthy();
  });
});
