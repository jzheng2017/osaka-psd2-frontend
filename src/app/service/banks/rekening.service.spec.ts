import { TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { RekeningService } from './rekening.service';

describe('RekeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
    ],
  }));

  it('should be created', () => {
    const service: RekeningService = TestBed.get(RekeningService);
    expect(service).toBeTruthy();
  });
});
