import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('CategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler,
    ]
  }));

  it('should be created', () => {
    const service: CategoryService = TestBed.get(CategoryService);
    expect(service).toBeTruthy();
  });
});
