import { TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { RekeningService } from './rekening.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('RekeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
    ],
    providers: [
      HttpClient,
      HttpHandler,
    ]

  }));

  it('should be created', () => {
    const service: RekeningService = TestBed.get(RekeningService);
    expect(service).toBeTruthy();
  });
});
