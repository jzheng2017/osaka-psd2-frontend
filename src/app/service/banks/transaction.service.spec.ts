import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
    ],
    providers: [
      HttpClient,
      HttpHandler,
      ]
  }));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
